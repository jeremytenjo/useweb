import React, { useRef, useState, useEffect } from 'react'

import * as S from './styles'
import { defaultProps, propTypes } from './props'

const Accordion = ({ title, icon, children, defaultOpen }) => {
  const contentRef = useRef<any>(null)
  const [open, setOpen] = useState(defaultOpen)

  const handleTopBarClick = () => setOpen(!open)

  useEffect(() => {
    animate()
  }, [open])

  const animate = () => {
    if (open) {
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`
    } else {
      contentRef.current.style.height = 0
    }
  }

  return (
    <S.Wrapper>
      <S.TopBar open={open} onClick={handleTopBarClick}>
        {title}
        <S.IconWrapper open={open}>{icon}</S.IconWrapper>
      </S.TopBar>
      <S.Content ref={contentRef} open={open}>
        {children}
      </S.Content>
    </S.Wrapper>
  )
}

Accordion.defaultProps = defaultProps
Accordion.propTypes = propTypes

export default Accordion
