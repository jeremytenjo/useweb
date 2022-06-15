import isFuture from 'date-fns/isFuture'

const dateIsFuture = (date) => isFuture(new Date(date))

export default dateIsFuture
