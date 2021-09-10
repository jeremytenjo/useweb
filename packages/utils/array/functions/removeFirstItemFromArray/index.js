// [1, 2, 3] would return [2, 3]
export default function removeFirstItemFromArray(data = []) {
  const dataMinusFirstItem = data.slice()
  dataMinusFirstItem.shift()

  return dataMinusFirstItem
}
