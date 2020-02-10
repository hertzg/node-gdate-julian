const make_julian_date = (y, m, d, h = 12, i = 0, s = 0, ms = 0) => {
  const dt = new Date
  dt.setUTCFullYear(y)
  dt.setUTCMonth(m)
  dt.setUTCDate(d)

  dt.setUTCHours(h)
  dt.setUTCMinutes(i)
  dt.setUTCSeconds(s)
  dt.setUTCMilliseconds(ms)

  return dt;
}

module.exports = make_julian_date
