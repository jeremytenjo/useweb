import isPast from 'date-fns/isPast'

const dateIsPast = (date) => isPast(new Date(date))

export default dateIsPast
