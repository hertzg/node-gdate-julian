export const makeUTCDate = (
  years,
  months,
  days,
  hours = 12,
  minutes = 0,
  seconds = 0,
  milliseconds = 0
) => {
  const date = new Date();

  date.setUTCFullYear(years);
  date.setUTCMonth(months);
  date.setUTCDate(days);

  date.setUTCHours(hours);
  date.setUTCMinutes(minutes);
  date.setUTCSeconds(seconds);
  date.setUTCMilliseconds(milliseconds);

  return date;
};
