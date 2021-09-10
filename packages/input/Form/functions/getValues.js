// https://gomakethings.com/how-to-serialize-form-data-with-vanilla-js/
export default function serialize(form) {
  // Setup our serialized data
  const formValues = {}

  // Loop through each field in the form
  for (let i = 0; i < form.elements.length; i++) {
    const selections = []
    const field = form.elements[i]

    // console.log(field)
    // console.log(field.type)
    // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
    if (
      !field.name ||
      field.disabled ||
      field.type === 'reset' ||
      field.type === 'submit' ||
      field.type === 'button'
    )
      continue

    // handle text, number, checkbox, radio fields
    if (
      field.type === 'text' ||
      field.type === 'number' ||
      (field.type !== 'checkbox' && field.type !== 'radio') ||
      field.checked
    ) {
      formValues[field.name] = field.value
    }

    // If a multi-select, get all selections
    if (field.type === 'select-multiple' || field.type === 'select-one') {
      for (let n = 0; n < field.options.length; n++) {
        if (!field.options[n].selected) continue
        selections.push(field.options[n].value)
      }
      formValues[field.name] = selections
    }

    // Handle file input
    if (field.type === 'file') {
      let filesList = field.files
      filesList = filesList.length === 1 ? field.files[0] : filesList
      formValues[field.name] = filesList
    }
  }

  // check if all formValues are empty
  return formValues
}
