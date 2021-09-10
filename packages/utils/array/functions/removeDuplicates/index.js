export default ({ data, comp }) =>
  comp ? handleArrayOfObjects(data, comp) : handleArrayWithSingleValues(data)

// [1,2]
const handleArrayWithSingleValues = (data) => Array.from(new Set(data))
// [{name: 'df', name: 'kk}]
const handleArrayOfObjects = (data, comp) => {
  const uniqueData = data
    .map((e) => e[comp])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter((e) => data[e])
    .map((e) => data[e])

  return uniqueData
}
