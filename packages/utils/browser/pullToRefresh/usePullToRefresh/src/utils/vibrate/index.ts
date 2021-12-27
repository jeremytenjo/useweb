export default function vibrate(rate = 100) {
  if (window.navigator.vibrate) {
    window.navigator.vibrate(rate)
  }
}
