const g_date_is_leap_year = (year) =>
  (
    (
      (
        (year % 4) === 0
      )
      && (
        (year % 100) !== 0
      )
    ) || (year % 400) === 0
  )

module.exports = g_date_is_leap_year
