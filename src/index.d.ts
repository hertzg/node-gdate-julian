export type isLeapYear = (year: number) => boolean;
export type julianDaysToDate = (julian_days: number) => Date;
export type dateToJulianDays = (date: Date) => number;

export const isLeapYear: isLeapYear;
export const julianDaysToDate: julianDaysToDate;
export const dateToJulianDays: dateToJulianDays;
