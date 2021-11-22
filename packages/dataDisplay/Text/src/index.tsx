import React from 'react'
import styled from 'styled-components'
import system from '@useweb/style-system'

const defineTag = (tag, variant) => {
  switch (variant) {
    case 'body1':
    case 'body2':
      return 'p'
    default:
      return tag
  }
}

const El = styled.span`
  ${system}
`
type Props = {
  tag?: string
  variant?: string
  styles?: object
  onClick?: any
  text?: string
  className?: string
}

/**
 * @example
 * <Text text='hello' />
 */
export default function Text({
  tag,
  variant,
  styles = {},
  onClick,
  text = '',
  className = '',
}: Props) {
  const classN = `typography-${variant} ${className}`
  const Tag = defineTag(tag, variant)

  return (
    <El as={Tag} styles={styles} className={classN} onClick={onClick}>
      {text}
    </El>
  )
}
