import { string, func, number } from 'prop-types'

export const defaultProps = {
  color: 'primaryLighter',
  letterColor: 'primaryDarker',
  borderColor: null,
  name: 'N',
  src: null,
  paddedBorder: null,
  size: '80px',
  radius: 100,
  onClick: () => null,
}

export const propTypes = {
  color: string,
  name: string,
  letterColor: string,
  src: string,
  size: string,
  radius: number,
  onClick: func,
}
