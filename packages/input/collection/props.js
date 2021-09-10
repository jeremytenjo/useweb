import { number, array, bool, func } from 'prop-types'

export const defaultProps = {
  textFieldStyle: 1,
  initialData: [],
  editable: true,
  removeItemOnClick: null,
  onItemClick: () => null,
  onItemAdded: () => null,
  onItemRemoved: () => null,
}

export const propTypes = {
  textFieldStyle: number,
  initialData: array,
  editable: bool,
  removeItemOnClick: bool,
  onItemClick: func,
  onItemAdded: func,
  onItemRemoved: func,
}
