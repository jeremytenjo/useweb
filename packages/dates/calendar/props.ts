import { func, array, number } from 'prop-types'

export const defaultProps = {
  events: [],
  yearRange: 5,
  onEventClick: () => null,
}

export const propTypes = {
  events: array,
  yearRange: number,
  onEventClick: func,
}
