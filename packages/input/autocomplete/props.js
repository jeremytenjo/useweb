import { array, func, number } from 'prop-types'

export const defaultProps = {
  inputStyle: 1,
  data: [],
  onClick: () => null,
}

export const propTypes = {
  inputStyle: number,
  data: array,
  onClick: func,
}
