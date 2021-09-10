import toBolean from '../../../utils/string/toBoolean'

export default function checkInvalidValues(form) {
  // Loop through each field in the form
  let hasInvalid = false
  for (let i = 0; i < form.elements.length; i++) {
    const field = form.elements[i]
    const hasvalidattribute = field.dataset.isvalid

    if (hasvalidattribute) {
      const isValid = toBolean(field.dataset.isvalid)
      if (!isValid) {
        field.scrollIntoView({ behavior: 'smooth' })
        hasInvalid = true
      }
    }
  }

  return hasInvalid
}
