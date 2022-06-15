import isToday from 'date-fns/isToday'

const dateIsToday = (date) => isToday(new Date(date))

export default dateIsToday
