export default ({ value, message = 'Field required' }) => (value === '' ? message : null)
