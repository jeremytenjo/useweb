import React, { useState } from 'react'
import useEventListener from '@useweb/use-event-listener'
import Animate from '@useweb/animate'

import IconArrowFeather from './IconArrowFeather'

import { iconStyles } from './styles'

export default function ScrollBackToTopIcon({
  Icon = IconArrowFeather,
  animationProps = {},
  iconProps = {},
  offset = 20,
}) {
  const [show, setshow] = useState(null)

  const handleScroll = () => {
    const show = window.scrollY > offset
    setshow(show)
  }

  useEventListener('scroll', handleScroll)

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <Animate show={show} {...animationProps}>
      <Icon
        background
        color='white'
        onClick={handleClick}
        style={iconStyles}
        backgroundColor='blackOpaque'
        size='12px'
        backgroundSize='20px'
        {...iconProps}
      />
    </Animate>
  )
}
