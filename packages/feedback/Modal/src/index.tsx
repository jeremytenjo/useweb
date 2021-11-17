import Overlay from '@useweb/overlay'
import useAnimation from '@useweb/animate'

import { defaultProps, propTypes } from './props'
import { ModalWrapper } from './styles'
import { memo, useEffect, useRef } from 'react'

const Modal = ({
  show,
  children,
  onClose,
  animationStyle,
  animationsStyles,
  style,
  overlayStyles,
}) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyInput, true)
    return () => {
      window.removeEventListener('keydown', handleKeyInput, true)
    }
  }, [])
  const handleKeyInput = ({ key }) => key === 'Escape' && onClose()

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

export default memo(Modal)
