import { makeUTCDate } from "./makeUTCDate.js";

const t = Math.trunc;

export const julianDaysToDate = (julian_days) => {
  /* Formula taken from the Calendar FAQ; the formula was for the
   *  Julian Period which starts on 1 January 4713 BC, so we add
   *  1,721,425 to the number of days before doing the formula.
   *
   *  I'm sure this can be simplified for our 1 January 1 AD period start
   */

  const A = julian_days + 1721425 + 32045; //  adjusted Julian day value
  const B = t(t(4 * (A + 36524)) / 146097) - 1; // the number of 1460-year periods that have elapsed since January 1, 4713 BC
  const C = A - t(t(146097 * B) / 4); // the number of days that have elapsed since the beginning of the last 1460-year period
  const D = t(t(4 * (C + 365)) / 1461) - 1; // the number of 365-year periods that have elapsed since January 1 of the current 1460-year period
  const E = C - t(t(1461 * D) / 4); // the number of days that have elapsed since January 1 of the current 365-year period
  const M = t((t(5 * (E - 1)) + 2) / 153); // the month number (1 is March, 2 is April, etc.)

  const m = M + 3 - t(12 * t(M / 10)); // the calendar month number (1 is January, 2 is February, etc.)
  const day = E - t((t(153 * M) + 2) / 5); // the day of the month (1-31)
  const y = t(100 * B) + D - 4800 + t(M / 10); // the year (positive for AD, negative for BC)

  return makeUTCDate(y, m - 1, day);
};
