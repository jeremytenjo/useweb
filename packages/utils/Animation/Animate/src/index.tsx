import React, { useEffect, useRef } from 'react'

import animationPresets from './presets/presets'

const defaultConfig = {
  fill: 'forwards',
  duration: 200,
  direction: 'normal',
  easing: 'ease-out',
}

export default function Animate({
  name = 'showHide',
  el = null,
  config = defaultConfig,
  show,
  children,
  style = {},
  ...rest
}) {
  const wrapperRef = useRef(null)
  const element = el || wrapperRef

  useEffect(() => {
    if (show !== null) execAnimation()
  }, [show])

  const execAnimation = () => {
    animationPresets(name, {
      el: element.current,
      name,
      config,
      show,
      children,
      ...rest,
    })
  }

  return children ? (
    <div
      style={{ display: 'none', ...style }}
      ref={wrapperRef}
      data-animation-wrapper='wrapper'
    >
      {children}
    </div>
  ) : null
}
