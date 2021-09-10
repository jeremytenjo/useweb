export default (item) => {
  const isValid = typeof item === 'number' || typeof item === 'string'

  if (isValid) {
    return item.toString().length === 1 ? `0${item}` : item
  } else {
    console.error('must be string or number')
    return item
  }
}
