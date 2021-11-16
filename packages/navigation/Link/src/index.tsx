import React, { memo } from 'react'
import Box from '@useweb/box'

import { defaultProps, propTypes } from './props'
import * as localStyles from './styles'

const Link = ({ children, styles, ...rest }) => {
  return (
    <Box styles={{ ...localStyles.wrapper, ...styles }} {...rest} as='a'>
      {children}
    </Box>
  )
}

Link.defaultProps = defaultProps
Link.propTypes = propTypes

export default memo(Link)
