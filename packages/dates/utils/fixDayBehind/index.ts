/**
 * When date is formatted "2014-03-07" it will be a day behind in new Date()
 *
 *{@Link https://stackoverflow.com/questions/45407072/javascript-dates-are-a-day-off|Docs}
 */
const fixDayBehind = (date) => {
  const utcDate = new Date(date)
  const airData = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000)

  return airData
}

export default fixDayBehind
