import { DateTime } from "luxon";

export enum Weekday {
  MONDAY = 0,
  TUESDAY = 1,
  WEDNESDAY = 2,
  THURSDAY = 3,
  FRIDAY = 4,
  SATURDAY = 5,
  SUNDAY = 6,
}

export const weekdayToDate = (
  weekday: Weekday,
  hour: number = 0,
  minute: number = 0,
  second: number = 0
): DateTime => {
  return DateTime.fromObject(
    {
      year: 2023,
      month: 1,
      day: 5 + weekday,
      hour: hour,
      minute: minute,
      second: second,
    },
    { zone: "Europe/Madrid" }
  );
};
