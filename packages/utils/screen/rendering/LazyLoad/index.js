import React from 'react'
import LazyLoad from 'react-lazyload'

import { Window } from '../../browser'

export default ({ children, ...props }) => {
  const isSupported = Window().IntersectionObserver || false
  const defaultProps = { offset: 100, once: true }

  const mergedProps = { ...defaultProps, ...props }

  return isSupported ? <LazyLoad {...mergedProps}>{children}</LazyLoad> : children
}
