const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

it("should test functionality of .slice() and .concat() to see whether they can produce the appropriate list of week days for the weekly forecast given the current week day number", () => {
  const currentWeekdayNumber = 3;
  const weeklyForecastDays = daysOfWeek
    .slice(currentWeekdayNumber, daysOfWeek.length)
    .concat(daysOfWeek.slice(0, currentWeekdayNumber));
  expect(weeklyForecastDays).toEqual([
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
  ]);
});
