// eg name = "--color-primary"
const getCssVarColor = (name) => {
  const style = getComputedStyle(document.body)
  const value = style.getPropertyValue(name)

  return value
}

export default getCssVarColor
