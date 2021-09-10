import { string, number } from 'prop-types'

export const defaultProps = {
  src: '',
  name: '',
  rating: 5,
  location: '',
}

export const propTypes = {
  src: string,
  name: string,
  rating: number,
  location: string,
}
