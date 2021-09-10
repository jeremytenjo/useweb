import { array, string, func, bool, number } from 'prop-types'

export const defaultProps = {
  number: 0,
  isCurrentDay: null,
  isActive: null,
  acceptedColor: 'green',
  pendingColor: 'orange',
  rejectedColor: 'red',
  activeColor: '#00BFA5',
  statuses: [],
  events: [],
  onClick: () => null,
}

export const propTypes = {
  number: number,
  isCurrentDay: bool,
  isActive: bool,
  acceptedColor: string,
  pendingColor: string,
  rejectedColor: string,
  statuses: array,
  events: array,
  onClick: func,
}
