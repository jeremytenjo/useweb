import { string, func, number } from 'prop-types'

export const defaultProps = {
  inputStyle: 1,
  text: 'Chip',
  onClick: () => null,
}

export const propTypes = {
  inputStyle: number,
  text: string,
  onClick: func,
}
