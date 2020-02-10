const g_date_to_julian_days = require('../g_date_to_julian_days')
  , g_julian_days_to_date = require('../g_julian_days_to_date')

const mkDate = (y, mm, d) => {
  let dt = new Date(0)
  dt.setUTCFullYear(y)
  dt.setUTCMonth(mm - 1)
  dt.setUTCDate(d)
  dt.setUTCHours(12)
  dt.setUTCMinutes(0)
  dt.setUTCSeconds(0)
  dt.setUTCMilliseconds(0)
  return dt;
}

const CASES = [
  [mkDate(1, 1, 1), 1],
  [mkDate(1, 1, 31), 31],
  [mkDate(1900, 1, 1), 693596],
  [mkDate(2018, 5, 29), 736843],
  [mkDate(2018, 5, 30), 736844],
  [mkDate(2200, 12, 31), 803533],
]

describe('Date to and from Julian Days Conversions', () => {

  it.each(CASES)('should convert date %j to %j julian days', (date, julianDays) => {
    expect(g_date_to_julian_days(date))
        .toBe(julianDays)

    expect(g_julian_days_to_date(julianDays).toISOString())
        .toBe(date.toISOString())
  })

  it.each(CASES)('should convert to and from and stay the same for date %j and %j julian days', (date, julianDays) => {
    expect(g_julian_days_to_date(g_date_to_julian_days(date)).toISOString())
        .toBe(date.toISOString())

    expect(g_date_to_julian_days(g_julian_days_to_date(julianDays)))
        .toBe(julianDays)
  })

})
