import React, { useEffect, useRef } from 'react'
import useAnimation from '@useweb/animate'
import Box from '@useweb/box'
import preventBodyScroll from '@useweb/prevent-body-scroll'
import useEventListener from '@useweb/use-event-listener'

import { defaultProps, propTypes } from './props'
import * as styles from './styles'

const Overlay = ({ show, onClick, dataCy, appendToBody, wrapperStyles }) => {
  const overlayRef = useRef(null)

  useEffect(() => {
    if (appendToBody) {
      document.querySelector('body').append(overlayRef.current)
    }
  }, [])

  useEffect(() => {
    preventBodyScroll(show)
  }, [show])

  useEffect(() => {
    return () => {
      preventBodyScroll(false)
    }
  }, [])

  const handleKeyInput = (e) => e.key === 'Escape' && show !== null && onClick()

  useEventListener('keydown', handleKeyInput)

  useAnimation({
    name: 'showHide',
    show,
    el: overlayRef,
  })

  return (
    <Box
      name='overlay'
      ref={overlayRef}
      onClick={onClick}
      data-cy={dataCy}
      styles={{ ...styles.wrapper, ...wrapperStyles }}
    />
  )
}

Overlay.defaultProps = defaultProps
Overlay.propTypes = propTypes

export default Overlay
