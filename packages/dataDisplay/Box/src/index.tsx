import React from 'react'
import MuiBox, { type BoxProps as MuiBoxProps } from '@mui/material/Box'


export type BoxProps = MuiBoxProps & {}

export default function Box(props: BoxProps) {
  return <MuiBox {...props} />
}
