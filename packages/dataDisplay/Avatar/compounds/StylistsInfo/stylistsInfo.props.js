import { string, func, number, oneOfType, object } from 'prop-types'

export const defaultProps = {
  name: '',
  photoUrl: '',
  id: '',
  rating: 0,
  onClick: () => null,
}

export const propTypes = {
  name: string,
  id: oneOfType([string, number]),
  photoUrl: string,
  rating: number,
  onClick: func,
  router: object,
}
