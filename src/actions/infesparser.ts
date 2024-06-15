"use server";

import { Weekday, weekdayToDate } from "@/types/infes/dates";
import {
  ClassSchedule,
  Course,
  CourseActivity,
  GroupSchedule,
  CourseSchedule,
  Itinerary,
  CourseExam,
  Semester,
} from "@/types/infes/itinerary";
import { DateTime } from "luxon";
import { parse } from "node-html-parser";

import { HTMLElement as HTMLElement2, NodeType } from "node-html-parser";

const weekdayMap: { [name: string]: Weekday } = {
  "dl.": Weekday.MONDAY,
  "dt.": Weekday.TUESDAY,
  "dc.": Weekday.WEDNESDAY,
  "dj.": Weekday.THURSDAY,
  "dv.": Weekday.FRIDAY,
  "ds.": Weekday.SATURDAY,
  "dm.": Weekday.SUNDAY,
};

const catalanMonthsMap: { [name: string]: number } = {
  gener: 1,
  febrer: 2,
  març: 3,
  abril: 4,
  maig: 5,
  juny: 6,
  juliol: 7,
  agost: 8,
  setembre: 9,
  octubre: 10,
  novembre: 11,
  desembre: 12,
};

const EPOCH = DateTime.fromMillis(0);

export const fetchItineraryHTML = async (id: string) => {
  const response = await fetch(
    `http://www.ub.edu/grad/infes/fitxaInfe.jsp?n0=N&n1=0&n2=0&curs=2023&ens=${id}&idioma=cat`,
    {
      method: "GET",
      headers: {
        "Content-Type": "text/html;charset=windows-1252",
      },
    }
  );

  const buffer = await response.arrayBuffer();
  const decoder = new TextDecoder("windows-1252");
  const text = await decoder.decode(buffer);

  return text;
};

const decodeText = (root: any, querySelector: string): string | undefined => {
  const element = root.querySelector(querySelector);

  if (element) {
    return element.textContent.trim();
  }

  return undefined;
};

const getChildrenElements = (root: HTMLElement2) => {
  return root.childNodes
    .filter((node) => node.nodeType == NodeType.ELEMENT_NODE)
    .map((node) => {
      return node as HTMLElement2;
    });
};

export const parseItinerary = async (rawHTML: string): Promise<Itinerary> => {
  const root = parse(rawHTML);

  if (!root) throw Error("Lorem ipsum");

  const ensenyamentInput = root.querySelector(
    `form[name="fi"] input[name="ens"]`
  ) as HTMLElement | null;

  var year: number = 0;

  const rows = root
    .querySelector("#contInfesCos > div > table")
    ?.getElementsByTagName("tr")
    .filter((element) => (element.classNames != 'cella_fons_groc'));

  const courses: Course[] = [];

  rows?.forEach((element) => {
    const columns = element.getElementsByTagName("td");

    if (element.classNames == '' && Number(columns[0].getAttribute('rowspan')) > 0) {
      year++;
      return;
    }

    const id = columns[0].text.trim();
    const name = columns[1].text.trim();
    const credits = Number(columns[3].text.trim());

    const first = columns[columns.length - 2].text.trim();
    const second = columns[columns.length - 1].text.trim();

    var semester = Semester.UNKNOWN;

    if (first == "anual") semester = Semester.ANNUAL;
    else if (first == "primer") semester = Semester.FIRST;
    else if (second == "segon") semester = Semester.SECOND;

    courses.push({
      id: id,
      name: name,
      year: year,
      credits: credits,
      schedule: [
        {
          activities: [],
          exams: [],
          semester: semester,
        },
      ],
    });
  })

  return {
    id: ensenyamentInput?.getAttribute("value") ?? "",
    name:
      decodeText(
        root,
        "#contInfesCos td.cella_titol_menu_lateral:not(#t_distribucio)"
      ) ?? "",
    courses: courses,
  };
};

export const fetchCourseScheduleHTML = async (
  ensId: string,
  assigId: string,
  curs?: string
) => {
  const requestHeaders = new Headers();
  requestHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const formData = new URLSearchParams();
  formData.append("n0", "2N");
  formData.append("n1", "00");
  formData.append("n2", "1");
  formData.append("n3", "");
  formData.append("curs", curs ?? (new Date().getFullYear() - 1).toString()); // TODO: Handle this
  formData.append("ens", ensId);
  formData.append("assig", assigId);
  formData.append("cicle", "g");
  formData.append("cursImp", "null");
  formData.append("grup", "null");
  formData.append("semImp", "null");
  formData.append("semIni", "1");
  formData.append("prof", "");
  formData.append("tipus", "null");
  formData.append("ta", "null");
  formData.append("idioma", "cat");
  formData.append("itinerarisOberts", ";100331");

  requestHeaders.append(
    "Content-Length",
    formData.toString().length.toString()
  );

  const response = await fetch("http://www.ub.edu/grad/infes/fitxaInfe.jsp", {
    method: "POST",
    headers: requestHeaders,
    body: formData,
  });

  const buffer = await response.arrayBuffer();
  const decoder = new TextDecoder("windows-1252");
  const text = await decoder.decode(buffer);

  return text;
};

interface DailyTime {
  hour?: number;
  minute?: number;
  second?: number;
  milliseconds?: number;
}

const decodeHoursMinutes = (input: string): [DailyTime, DailyTime] => {
  const [start, end] = input.split("-");

  const [startHours, startMinutes] = start.split(".");
  const [endHours, endMinutes] = end.split(".");

  return [
    {
      hour: Number(startHours),
      minute: Number(startMinutes),
    },
    {
      hour: Number(endHours),
      minute: Number(endMinutes),
    },
  ];
};

const parseActivityGroupTable = (table: HTMLElement2): GroupSchedule => {
  const group = decodeText(table, "td.faDDGrup");
  const time = decodeText(table, "td.idhHorari");

  if (!group) throw Error("Could not read group");
  if (!time) throw Error("Could not read time");

  const frequencies: ClassSchedule[] = table
    .querySelectorAll("table.frequencia td.freqDiaOn")
    .map((element) => {
      const day = weekdayMap[element.text];

      if (!(day in Object.keys(weekdayMap)))
        throw Error("Error parsing frequencies");

      const [startTimeHM, endTimeHM] = decodeHoursMinutes(time);

      const startTime = weekdayToDate(
        day,
        startTimeHM.hour,
        startTimeHM.minute
      );

      const endTime = weekdayToDate(day, startTimeHM.hour, startTimeHM.minute);

      return {
        startTime: startTime.toUnixInteger(),
        endTime: endTime.toUnixInteger(),
      } as ClassSchedule;
    });

  if (!frequencies.length) throw Error("Could not read frequencies");

  return {
    group: group,
    schedules: frequencies,
  };
};

const parseActivityExamTable = (
  exam: CourseExam,
  table: HTMLElement2
): CourseExam => {
  var dayText: string | undefined = decodeText(table, "td.idhDies");
  const time = decodeText(table, "td.idhHorari");

  if (!time) throw Error("Could not read day");

  dayText = dayText?.replaceAll("de ", "");
  dayText?.replaceAll("d'", "");

  const [day, monthText, year] = dayText?.split(/\s+/) ?? [];

  if (!day || !monthText || !year) throw Error("Unable to parse exam day");

  const month = catalanMonthsMap[monthText];

  const [startTimeHM, endTimeHM] = decodeHoursMinutes(time);

  exam.startTime = DateTime.fromObject(
    {
      year: Number(year),
      month: month,
      day: Number(day),
      hour: startTimeHM.hour,
      minute: startTimeHM.minute,
      second: startTimeHM.second,
    },
    {
      zone: "Europe/Madrid",
    }
  ).toUnixInteger();

  exam.endTime = DateTime.fromObject(
    {
      year: Number(year),
      month: month,
      day: Number(day),
      hour: endTimeHM.hour,
      minute: endTimeHM.minute,
      second: endTimeHM.second,
    },
    {
      zone: "Europe/Madrid",
    }
  ).toUnixInteger();

  return exam;
};

export const parseCourseSchedule = async (
  rawHTML: string
): Promise<CourseSchedule> => {
  const root = parse(rawHTML.trim());

  if (!root) throw Error("Could not parse HTML");

  // TODO: FIX THIS
  // const semester = decodeText(root, "#contInfesCos .faEstructura td.faEstDDIter") == "1 / 2" ? 1 : 2;
  const exe = root.querySelector(".exe");
  const activities: CourseActivity[] = [];
  const exams: CourseExam[] = [];

  if (!exe) throw Error("Could not find schedule");

  var children = getChildrenElements(exe);

  var i: number = 0; // Avoid first three elements
  var fillActivities: boolean = true;
  var activity: CourseActivity | undefined = undefined;
  var exam: CourseExam | undefined = undefined;

  // Fill schedule activities.
  while (i < children.length) {
    switch (children[i].classNames) {
      case "faActivitatTEOR":
      case "faActivitatPRAC":
        if (activity) activities.push(activity);
        activity = {
          name: children[i].text.trim(),
          groups: [],
        };
        break;
      case "faActivitatAVAL":
        if (exam) exams.push(exam);
        fillActivities = false;
        exam = {
          name: children[i].text.trim(),
          startTime: 0,
          endTime: 0,
        };
        break;
      case "faGrup":
        if (fillActivities) {
          if (!activity) throw Error("Could not read activity info");
          activity.groups.push(parseActivityGroupTable(children[i]));
        } else {
          if (!exam) throw Error("Could not read exam info");

          exam = parseActivityExamTable(exam, children[i]);
        }
        break;
    }

    i++;
  }

  if (activity) activities.push(activity);
  if (exam) exams.push(exam);

  var semester =
    Number(
      decodeText(root, "table.faEstructura .faEstDDIter")?.split(/\s+\/\s+/)[1]
    ) ?? Semester.UNKNOWN;

  // Weird Typescript hack
  switch (semester) {
    case Semester.ANNUAL:
      semester = Semester.ANNUAL;
      break;
    case Semester.FIRST:
      semester = Semester.FIRST;
      break;
    case Semester.SECOND:
      semester = Semester.SECOND;
      break;
    default:
      semester = Semester.UNKNOWN;
  }

  return {
    semester: semester,
    activities: activities,
    exams: exams,
  };
};
