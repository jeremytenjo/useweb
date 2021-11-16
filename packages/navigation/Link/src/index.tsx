import React, { memo } from 'react'
import Box from '@useweb/box'

import * as localStyles from './styles'

type Props = {
  children: any
  href: string
  styles?: object
}

const Link = ({ children, styles = {}, ...rest }: Props) => {
  return (
    <Box styles={{ ...localStyles.wrapper, ...styles }} {...rest} as='a'>
      {children}
    </Box>
  )
}

export default memo(Link)
