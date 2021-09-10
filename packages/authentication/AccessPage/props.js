import { string, func } from 'prop-types'

export const defaultProps = {
  onSuccess: () => null,
  logo: null,
  user: null,
  type: 'login',
  typographyVariant: 'h6',
  providers: ['apple', 'google', 'facebook'],
  service: 'firebase',
  onClose: () => null,
  loginFunction: () => null,
  registerFunction: () => null,
  onError: () => null,
}

export const propTypes = {
  onSuccess: func,
  text: string,
  type: string,
  onClick: func,
  loginFunction: func,
  registerFunction: func,
  onError: func,
}
