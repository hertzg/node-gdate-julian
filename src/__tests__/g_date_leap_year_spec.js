const g_date_is_leap_year = require('../g_date_is_leap_year')

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

  it('should detect leap and non leap years', () => {
    LEAP_YEARS.forEach((leapYear) => {
      expect(g_date_is_leap_year(leapYear))
        .toBe(true)
    })

    NON_LEAP_YEARS.forEach((nonLeapYear) => {
      expect(g_date_is_leap_year(nonLeapYear))
        .toBe(false)
    })
  })

})
