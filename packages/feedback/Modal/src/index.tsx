import React, { useRef } from 'react'
import Overlay from '@useweb/overlay'
import useAnimation from '@useweb/animate'
import useEventListener from '@useweb/use-event-listener'

import { ModalWrapper } from './styles'

type Props = {
  show?: boolean
  children?: any
  onClose?: () => void
  animationStyle?: 'blinking' | 'centerOut' | 'outmostIn' | 'showHide'
  animationsStyles?: object
  style?: object
  overlayStyles?: object
}
export default function Modal({
  show = null,
  children,
  onClose = () => null,
  animationStyle = 'centerOut',
  animationsStyles = {},
  style = {},
  overlayStyles = {},
}: Props) {
  const handleKeyInput = (e) => e.key === 'Escape' && show !== null && onClose()

  useEventListener('keydown', handleKeyInput)

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
