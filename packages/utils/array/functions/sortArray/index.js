const sortArray = (data, { order, type, keyToCompare } = {}) => {
  let sortedData = data
  if (type === 'number') {
    sortedData = data.sort((item1, item2) => {
      const item1Value = item1[keyToCompare]
      const item2Value = item2[keyToCompare]
      if (!item1Value && item2Value) return 1
      if (item1Value && !item2Value) return -1
      if (!item1Value && !item2Value) return -1
      const item1ValueRemoveNonNumberStrings = item1Value.replace('-', '')
      const item2ValueRemoveNonNumberStrings = item2Value.replace('-', '')
      const item1ValueInteger = parseInt(item1ValueRemoveNonNumberStrings, 10)
      const item2ValueInteger = parseInt(item2ValueRemoveNonNumberStrings, 10)
      const sorted =
        order === 'ascending'
          ? item2ValueInteger - item1ValueInteger
          : item1ValueInteger - item2ValueInteger

      return sorted
    })
  }

  return sortedData
}

export default sortArray
