export default ({ value, message = 'Required' }) => {
  return typeof value === 'object' ? false : message
}
