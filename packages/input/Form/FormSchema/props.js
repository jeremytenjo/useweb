import { func } from 'prop-types'

export const defaultProps = {
  schema: {},
  uiSchema: {},
  formData: {},
  onChange: () => null,
  onError: () => null,
  onSubmit: () => null,
  onFocus: () => null,
  onBlur: () => null,
}

export const propTypes = {
  onChange: func,
  onError: func,
  onSubmit: func,
  onFocus: func,
  onBlur: func,
}
