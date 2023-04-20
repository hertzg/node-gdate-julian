import { g_date_is_leap_year } from './g_date_is_leap_year.js'

const days_in_year =
  [  /* 0, jan feb mar apr may  jun  jul  aug  sep  oct  nov  dec */
    [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365],
    [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366]
  ]

export const g_date_to_julian_days = (date) => {
  /* What we actually do is: multiply years * 365 days in the year,
   * add the number of years divided by 4, subtract the number of
   * years divided by 100 and add the number of years divided by 400,
   * which accounts for leap year stuff. Code from Steffen Beyer's
   * DateCalc.
   */

  let uYear = date.getUTCFullYear()
    , uMonth = date.getUTCMonth()
    , uDate = date.getUTCDate()
    , year = uYear - 1 /* we know d->year > 0 since it's valid */
    , julian_days
  ;

  julian_days = year * 365;
  julian_days += (year >>= 2); /* divide by 4 and add */
  julian_days -= Math.trunc(year /= 25); /* divides original # years by 100 */
  julian_days += year >> 2;    /* divides by 4, which divides original by 400 */

  julian_days += days_in_year[g_date_is_leap_year(uYear) ? 1 : 0][uMonth] + uDate

  return julian_days
}
