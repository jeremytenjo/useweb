import dateFormat from 'date-fns/format'

/**
 * {@link https://date-fns.org/v2.16.1/docs/format|Docs}
 */
const formatDate = (date, format, options) => dateFormat(new Date(date), format, options)

export default formatDate
