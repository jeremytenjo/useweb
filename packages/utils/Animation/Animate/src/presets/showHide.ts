export default ({ el, show, config, displayType = 'display' }) => {
  const showAttr = displayType === 'display' ? 'block' : 'visible'
  const hideAttr = displayType === 'display' ? 'none' : 'hidden'

  if (
    (el.style[displayType] === showAttr && show) ||
    (el.style[displayType] === hideAttr && !show)
  )
    return null

  el.style[displayType] = showAttr

  const start = {
    opacity: show ? 0 : 1,
    [displayType]: hideAttr,
  }

  const to = {
    opacity: show ? 1 : 0,
    [displayType]: showAttr,
  }

  if (el.animate) {
    const anim = el.animate([start, to], config)

    anim.onfinish = () => {
      if (!show) el.style[displayType] = hideAttr
    }
  } else {
    if (!show) el.style[displayType] = hideAttr
  }
}
