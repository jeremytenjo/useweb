export default function genCssVariable(name, value) {
  const cssVariable = `--${name}: ${value};`

  return cssVariable
}
