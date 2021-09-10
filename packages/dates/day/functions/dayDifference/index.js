import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'

const dayDifference = ({ date1, date2 }) => {
  let difference = null
  if (date1 && date2) {
    const datesDifference = differenceInCalendarDays(
      new Date(date1.year, date1.month, date1.day),
      new Date(date2.year, date2.month, date2.day),
    )
    difference = datesDifference
  }

  return difference
}

export default dayDifference
