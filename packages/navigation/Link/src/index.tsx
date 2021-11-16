import React, { memo } from 'react'
import Box from '@useweb/box'

import * as localStyles from './styles'

type Props = {
  children: any
  href: string
  title?: string
  target?: string
  rel?: string
  styles?: object
}

const Link = ({
  children,
  styles = {},
  title,
  target = '_blank',
  rel = 'noopener noreferrer',
  ...rest
}: Props) => {
  return (
    <Box
      styles={{ ...localStyles.wrapper, ...styles }}
      target={target}
      rel={rel}
      {...rest}
      as='a'
    >
      {children}
    </Box>
  )
}

export default memo(Link)
