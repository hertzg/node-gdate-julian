const mkJDate = require('./_make_julian_date')
const t = Math.trunc

const g_julian_days_to_date = (julian_days) => {
  /* Formula taken from the Calendar FAQ; the formula was for the
   *  Julian Period which starts on 1 January 4713 BC, so we add
   *  1,721,425 to the number of days before doing the formula.
   *
   * I'm sure this can be simplified for our 1 January 1 AD period
   * start, but I can't figure out how to unpack the formula.
   */

  const A = julian_days + 1721425 + 32045;
  const B = t(t(4 * (A + 36524)) / 146097) - 1;
  const C = A - t(t(146097 * B) / 4);
  const D = t(t(4 * (C + 365)) / 1461) - 1;
  const E = C - t(t(1461 * D) / 4);
  const M = t((t(5 * (E - 1)) + 2) / 153);

  const m = M + 3 - t(12 * t(M / 10));
  const day = E - t((t(153 * M) + 2) / 5);
  const y = t(100 * B) + D - 4800 + t(M / 10);

  return mkJDate(y, m - 1, day)
}

module.exports = g_julian_days_to_date
