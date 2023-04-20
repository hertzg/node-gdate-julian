import { g_date_is_leap_year } from '../g_date_is_leap_year.js'

const LEAP_YEARS = [
  1584, 1588, 1592, 1596, 1600, 1604,
  1680, 1684, 1688, 1692, 1696, 1704,
  1856, 1860, 1864, 1868, 1872, 1876,
  1932, 1936, 1940, 1944, 1948, 1952,
  2004, 2008, 2012, 2016, 2020, 2024,
  2076, 2080, 2084, 2088, 2092, 2096
]

const NON_LEAP_YEARS = [
  1905, 1906, 1913, 1917, 1922, 1923,
  2075, 2081, 2086, 2089, 2094, 2097
]

describe('Gregorian Leap year detection', () => {

  it.each(LEAP_YEARS)('should detect that gregorian %j year is a leap years', (year) => {
    expect(g_date_is_leap_year(year))
        .toBe(true)
  })

  it.each(NON_LEAP_YEARS)('should detect that gregorian %j year is NOT a leap years', (year) => {
    expect(g_date_is_leap_year(year))
        .toBe(false)
  })
})
