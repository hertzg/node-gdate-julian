const g_date_is_leap_year = require('./g_date_is_leap_year')
  , g_date_to_julian_days = require('./g_date_to_julian_days')
  , g_julian_days_to_date = require('./g_julian_days_to_date')

module.exports = {
  g_julian_days_to_date,
  g_date_to_julian_days,
  g_date_is_leap_year,

  gIsLeapYear: g_date_is_leap_year,
  gJulianDays2Date: g_julian_days_to_date,
  gDate2JulianDays: g_date_to_julian_days
}
