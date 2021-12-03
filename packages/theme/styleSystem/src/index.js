import decamelize from '@useweb/decamelize'
import removeDuplicatesFromArray from '@useweb/remove-duplicates-from-array'

export default function styleSystem(props) {
  const {
    styles,
    theme: { mediaQueries = { minWidth: [400, 700, 1200], minHeight: [400, 700] } },
  } = props
  if (!styles) return ''

  const selectors = []
  const raw = []
  mediaQueries.minWidth.unshift(0)
  mediaQueries.minHeight.unshift(0)
  const minWidthMediaQueries = removeDuplicatesFromArray({
    data: mediaQueries.minWidth,
  })
  const minHeightMediaQueries = removeDuplicatesFromArray({
    data: mediaQueries.minHeight,
  })

  const handleVariableValue = ({ varName, value }) => {
    const isString = typeof value === 'string'
    const ignoreChangingToVariable = isString && value.slice(0, 2) === '--'
    const cleanValue = ignoreChangingToVariable ? value.substring(2) : value
    const withVariable = `var(--${varName}-${cleanValue})`
    const newValue = varName && !ignoreChangingToVariable ? withVariable : cleanValue
    return newValue
  }

  const getString = ({ varName, key, value }) => {
    const _key = decamelize(key, '-')
    const isArray = Array.isArray(value)
    const _value = handleVariableValue({ varName, value })
    if (!_key || !_value) return ''

    return isArray ? handleMediaQueries({ key, value, varName }) : `${_key}: ${_value};`
  }

  const handleMediaQueries = ({ key, value, varName }) => {
    let minWidthString = ''
    let minHeightString = ''
    let masterString = ''
    const _key = decamelize(key, '-')
    const mindWidthData = value.filter((val) => typeof val === 'string')
    let mindHeightData = value.filter((val) => Array.isArray(val))
    mindHeightData = mindHeightData[0] || []

    const getMediaQueryValue = (_key, item, index, type) => {
      const queries = type === 'width' ? minWidthMediaQueries : minHeightMediaQueries
      const _value = handleVariableValue({ varName, value: item })
      const property = `${_key}: ${_value};`

      return index === 0
        ? property
        : _value
        ? `@media (min-${type}: ${queries[index]}px) {
          ${property}
        }`
        : ''
    }

    // handle min WIDTH
    minWidthString = mindWidthData.map((item, index) => {
      return getMediaQueryValue(_key, item, index, 'width')
    })
    minWidthString = minWidthString.join('\n')
    // handle min HEIGHT
    minHeightString = mindHeightData.map((item, index) => {
      return getMediaQueryValue(_key, item, index, 'height')
    })
    minHeightString = minHeightString.join('\n')

    masterString = minWidthString + minHeightString
    return masterString
  }

  const handleStyles = ({ styles }) => {
    const array = []
    let string = ''

    Object.entries(styles).forEach(([key, value]) => {
      if (key.includes(':')) {
        selectors.push({ selector: key, styles: value })
      } else if (key.includes('raw')) {
        raw.push({ styles: value })
      } else if (
        key.includes('padding') ||
        key.includes('margin') ||
        key.includes('gap') ||
        key.includes('Gap') ||
        key.includes('top') ||
        key.includes('right') ||
        key.includes('bottom') ||
        key.includes('left')
      )
        array.push(getString({ varName: 'spacing', key, value }))
      else if (key.includes('color') || key.includes('Color') || key.includes('fill'))
        array.push(getString({ varName: 'color', key, value }))
      else array.push(getString({ key, value }))
    })

    string = array.join('\n')
    return string
  }

  const handleSelectors = () => {
    let masterString = ''
    if (selectors.length) {
      const se = selectors.map(({ selector, styles }) => {
        let string = `${selector} {`
        string += handleStyles({ styles })
        string += `}`
        return string
      })

      masterString = se.join('\n')
      return masterString
    }

    return masterString
  }

  const handleRaw = () => {
    let masterString = ''
    if (raw.length) {
      const se = raw.map(({ styles }) => {
        return styles
      })
      masterString = se.join('\n')
      return masterString
    }
    return masterString
  }

  const genStyles = handleStyles({ styles })

  const selectorStyles = handleSelectors()

  const rawStyles = handleRaw()

  return `${genStyles} ${selectorStyles} ${rawStyles}`
}
