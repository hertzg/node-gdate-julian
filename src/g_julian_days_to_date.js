const g_julian_days_to_date = (julian_days) => {
  /* Formula taken from the Calendar FAQ; the formula was for the
   *  Julian Period which starts on 1 January 4713 BC, so we add
   *  1,721,425 to the number of days before doing the formula.
   *
   * I'm sure this can be simplified for our 1 January 1 AD period
   * start, but I can't figure out how to unpack the formula.
   */

  const A = julian_days + 1721425 + 32045;
  const B = Math.trunc(Math.trunc(4 * (A + 36524)) / 146097) - 1;
  const C = A - Math.trunc(Math.trunc(146097 * B) / 4);
  const D = Math.trunc(Math.trunc(4 * (C + 365)) / 1461) - 1;
  const E = C - Math.trunc(Math.trunc(1461 * D) / 4);
  const M = Math.trunc((Math.trunc(5 * (E - 1)) + 2) / 153);

  const m = M + 3 - Math.trunc(12 * Math.trunc(M / 10));
  const day = E - Math.trunc((Math.trunc(153 * M) + 2) / 5);
  const y = Math.trunc(100 * B) + D - 4800 + Math.trunc(M / 10);

  const dt = new Date
  dt.setUTCFullYear(y)
  dt.setUTCMonth(m - 1)
  dt.setUTCDate(day)

  //TODO: the hours part could be calculated based on the remaining fraction
  dt.setUTCHours(12)
  dt.setUTCMinutes(0)
  dt.setUTCSeconds(0)
  dt.setUTCMilliseconds(0)

  return dt
}

module.exports = g_julian_days_to_date
