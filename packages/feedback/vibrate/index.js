export default (rate = 100) => {
  if (window.navigator.vibrate) {
    window.navigator.vibrate(rate)
  }
}
