import React from 'react'
import Box, { type BoxProps } from '@mui/material/Box'

import Text from '../../../../../dataDisplay/Text/src'

export type GoogleAdUnitProps = {
  isProd: boolean
  dataAdClient: string
  dataAdFormat: string
  dataAdLayoutKey: string
  dataAdSlot: string
  dataFullWidthResponsive?: string
  sx?: BoxProps['sx']
}

export default function GoogleAdUnit(props: GoogleAdUnitProps) {
  return (
    <Wrapper>
      <Ad {...props} />
    </Wrapper>
  )
}

const Wrapper = ({ children }) => {
  return <Box>{children}</Box>
}

const Ad = (props: GoogleAdUnitProps) => {
  const { sx = {} } = props

  return props.isProd ? (
    <>
      <Box
        component='ins'
        className='adsbygoogle'
        sx={{
          display: 'block',
          ...sx,
        }}
        data-ad-client={`ca-pub-${props.dataAdClient}`}
        data-ad-format={props.dataAdFormat}
        data-ad-layout-key={props.dataAdLayoutKey}
        data-ad-slot={props.dataAdSlot}
        data-full-width-responsive={props.dataFullWidthResponsive}
      ></Box>

      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </>
  ) : (
    <Box
      sx={{
        width: '100%',
        height: '116px',
        border: 'solid 2px black',
        backgroundColor: 'white.main',
        mb: 1,
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Text
        text='Ad Placeholder'
        sx={{
          color: 'black.main',
        }}
      />
    </Box>
  )
}
