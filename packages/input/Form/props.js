import { string, func, object } from 'prop-types'

export const defaultProps = {
  emptyFormMessage: 'Plase fill out form',
  style: {},
  onSubmitSuccess: () => null,
  onSubmitFail: () => null,
}

export const propTypes = {
  style: object,
  emptyFormMessage: string,
  onSubmitSuccess: func,
  onSubmitFail: func,
}
