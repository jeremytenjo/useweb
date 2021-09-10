import { string, object } from 'prop-types'

export const defaultProps = {
  image: null,
  title: 'No active',
  buttonText: 'FIND STYLIST',
  redUrl: '/explore',
  router: { push: () => null },
}

export const propTypes = {
  image: object,
  title: string,
  buttonText: string,
  redUrl: string,
  router: object,
}
