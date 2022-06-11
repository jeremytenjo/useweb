import React from 'react'
import MuiBox, { type BoxProps as MuiBoxProps } from '@mui/material/Box'

export type BoxProps = MuiBoxProps 

/**
 * [API](https://mui.com/material-ui/api/button/)
 * 
 * [Demo](https://mui.com/material-ui/react-button/)
 * 
 * @example 
 * <Box>Hello</Box>
 */
export default function Box(props: BoxProps) {
  return <MuiBox {...props} />
}
