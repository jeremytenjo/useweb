export default function isAppInForeground() {
  const isInForeground = document.visibilityState === 'visible'
  return isInForeground
}
