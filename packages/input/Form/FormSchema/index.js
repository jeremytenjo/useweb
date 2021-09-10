// https://react-jsonschema-form.readthedocs.io/en/latest/usage/single/
import Form from '@rjsf/core'

import { defaultProps, propTypes } from './props'

const FormSchema = ({
  schema,
  uiSchema,
  formData,
  onError,
  onSubmit,
  onFocus,
  onBlur,
}) => {
  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      formData={formData}
      onError={onError}
      onSubmit={onSubmit}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
}

FormSchema.defaultProps = defaultProps
FormSchema.propTypes = propTypes

export default memo(FormSchema)
