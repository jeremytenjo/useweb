export default function onSwipe(el, callback, { once = undefined } = {}) {
  if (!el) throw 'missing el prop'

  el.addEventListener('touchstart', startTouch, { once })
  el.addEventListener('touchmove', moveTouch, { once })

  // Swipe Up / Down / Left / Right
  let initialX = null
  let initialY = null
  let dir = null

  function startTouch(e) {
    initialX = e.touches[0].clientX
    initialY = e.touches[0].clientY
  }

  function moveTouch(e) {
    if (initialX === null || initialY === null) return
    const currentX = e.touches[0].clientX
    const currentY = e.touches[0].clientY
    const diffX = initialX - currentX
    const diffY = initialY - currentY

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // sliding horizontally
      if (diffX > 0) {
        // swiped left
        dir = 'left'
      } else {
        // swiped right
        dir = 'right'
      }
    } else {
      // sliding vertically
      if (diffY > 0) {
        // swiped up
        dir = 'up'
      } else {
        // swiped down
        dir = 'down'
      }
    }

    initialX = null
    initialY = null

    e.preventDefault()
    callback({ dir, removeListeners })
  }

  // remove memory leaks
  function removeListeners() {
    el.removeEventListener('touchstart', startTouch)
    el.removeEventListener('touchmove', moveTouch)
  }

  return removeListeners
}
