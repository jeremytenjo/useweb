import React, { useEffect, useRef } from 'react'
import Overlay from '@useweb/overlay'
import useAnimation from '@useweb/animate'

import { defaultProps, propTypes } from './props'
import { ModalWrapper } from './styles'

export default function Modal({
  show,
  children,
  onClose,
  animationStyle,
  animationsStyles,
  style,
  overlayStyles,
}) {
  const handleKeyInput = ({ key }) => key === 'Escape' && onClose()

  useEffect(() => {
    window.addEventListener('keydown', handleKeyInput, true)
    return () => {
      window.removeEventListener('keydown', handleKeyInput, true)
    }
  }, [])

  const modalRef = useRef(null)

  useAnimation({
    name: animationStyle,
    show: show,
    el: modalRef,
    style: animationsStyles,
  })

  return (
    <>
      <ModalWrapper ref={modalRef} style={style}>
        {children}
      </ModalWrapper>

      <Overlay show={show} onClick={onClose} wrapperStyles={overlayStyles} />
    </>
  )
}

Modal.defaultProps = defaultProps
Modal.propTypes = propTypes
