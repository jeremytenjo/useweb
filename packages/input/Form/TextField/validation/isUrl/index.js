import isUrl from '../../../../../data/regex/isUrl'

export default function TextFieldValidationIsUrl({
  value,
  message = 'Input is not an URL',
}) {
  const isValid = isUrl(value)
  return isValid ? null : message
}
