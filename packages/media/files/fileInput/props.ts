import { string, func, bool, array } from 'prop-types'

export const defaultProps = {
  accept: '.jpg, .jpeg, .png',
  onInput: () => null,
  name: 'input_name',
  isValid: null,
  errorMessage: null,
  returnBase64: true,
  validation: [],
}

export const propTypes = {
  accept: string,
  onInput: func,
  name: string.isRequired,
  isValid: bool,
  returnBase64: bool,
  errorMessage: string,
  validation: array,
}
