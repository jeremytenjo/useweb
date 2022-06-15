import React, { useRef, useEffect } from 'react'

import onSwipeFunction from '../../onSwipe/build/types'

export default function OnSwipe({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSwipe = (data) => null,
  onSwipeLeft = () => null,
  onSwipeRight = () => null,
  onSwipeUp = () => null,
  onSwipeDown = () => null,
  children,
}) {
  const wrapperRef = useRef(null)

  useEffect(() => {
    const removeListeners = onSwipeFunction(wrapperRef.current, handleSwipe)
    return () => removeListeners()
  }, [])

  const handleSwipe = ({ dir }) => {
    onSwipe(dir)

    switch (dir) {
      case 'right':
        onSwipeRight()
        break
      case 'left':
        onSwipeLeft()
        break
      case 'up':
        onSwipeUp()
        break
      case 'down':
        onSwipeDown()
        break
    }
  }

  return <div ref={wrapperRef}>{children}</div>
}
