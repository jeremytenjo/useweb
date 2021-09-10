export default ({ position }) => {
  return {
    position: 'fixed',
    top: position === 'top' ? 0 : 'auto',
    right: 0,
    bottom: position === 'bottom' ? 0 : 'auto',
    left: 0,
  }
}
