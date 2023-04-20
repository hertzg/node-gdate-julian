import { isLeapYear } from "./isLeapYear.js";

const daysInYearByMonth = [
  /* 0, jan feb mar apr may  jun  jul  aug  sep  oct  nov  dec */
  [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365], // Non leap year
  [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366], // Leap year
];

export const dateToJulianDays = (date) => {
  /* What we actually do is: multiply years * 365 days in the year,
   * add the number of years divided by 4, subtract the number of
   * years divided by 100 and add the number of years divided by 400,
   * which accounts for leap year stuff. Code from Steffen Beyer's
   * DateCalc.
   */

  const uYear = date.getUTCFullYear(),
    uMonth = date.getUTCMonth(),
    uDate = date.getUTCDate();

  let year = uYear - 1; /* we know d->year > 0 since it's valid */
  let julianDays;
  julianDays = year * 365;
  julianDays += year >>= 2; /* divide by 4 and add */
  julianDays -= Math.trunc((year /= 25)); /* divides original # years by 100 */
  julianDays += year >> 2; /* divides by 4, which divides original by 400 */

  julianDays += daysInYearByMonth[isLeapYear(uYear) ? 1 : 0][uMonth] + uDate;

  return julianDays;
};
