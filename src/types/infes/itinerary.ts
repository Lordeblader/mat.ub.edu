export enum Semester {
  UNKNOWN = -1,
  ANNUAL = 0,
  FIRST = 1,
  SECOND = 2,
}

/**
 * An specific weekly class (Monday 9.00-10.30).
 */
export interface ClassSchedule {
  startTime: number;
  endTime: number;
}

/**
 * A schedule for an specific group (M1, T1, A, B, etc.) of weekly classes
 */
export interface GroupSchedule {
  group: string;
  schedules: ClassSchedule[];
}

/**
 * A midterm or final exam.
 */
export interface CourseExam {
  startTime: number;
  endTime: number;
  name: string;
}

/**
 * Lectures, Laboratories, Problem classes, etc.
 */
export interface CourseActivity {
  name: string;
  groups: GroupSchedule[];
}

/**
 * Semestral/Annual schedule of a specific course.
 */
export interface CourseSchedule {
  semester: Semester;
  activities: CourseActivity[];
  exams: CourseExam[];
}

/**
 * A semestral/annual course.
 */
export interface Course {
  id: string;
  credits: number;
  name: string;
  year: number;
  schedule: CourseSchedule[];
}

/**
 * This information is not fetched from the Infes API
 */
export interface Academia {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

/**
 * A complete itinerary of a study.
 */
export interface Itinerary {
  id: string;
  name: string;

  courses: Course[];
}
