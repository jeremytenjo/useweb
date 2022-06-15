import React from 'react'

import Box from '../../../_ui/src/dataDisplay/Box/src'

import TopBar from './TopBar'
import Response from './Response'

export default function Ui(data) {
  return (
    <Box styles={{ gridGap: 'm' }}>
      <TopBar {...data} />
      <Response {...data} />
    </Box>
  )
}
