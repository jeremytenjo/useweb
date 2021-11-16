// Keyframes should be set before used in animate()
export default ({ el, config, show }) => {
  const keyframes = [
    {
      opacity: show ? 1 : 0,
    },
    {
      opacity: show ? 0 : 1,
    },
    {
      opacity: show ? 1 : 0,
    },
  ]
  if (el.animate) {
    el.style.display = 'block'
    const anim = el.animate(keyframes, {
      ...config,
      iterations: Infinity,
      duration: 1000,
    })
    anim.onfinish = () => {
      if (!show) el.style.display = 'none'
    }
  }
}
