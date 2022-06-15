import diffInDays from 'date-fns/differenceInDays'

/**
 * {@link https://date-fns.org/v2.16.1/docs/differenceInDays|Docs}
 */
const differenceInDays = (dateLeft, dateRight) =>
  diffInDays(new Date(dateLeft), new Date(dateRight))

export default differenceInDays
