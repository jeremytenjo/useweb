import React from 'react'
import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button'

export type ButtonProps = MuiButtonProps & {
  name: string
}

/**
 * [API](https://mui.com/material-ui/api/button/)
 * 
 * [Demo](https://mui.com/material-ui/react-button/)
 * 
 * @example 
 * <Button>Hello</Button>
 */
export default function Button(props: ButtonProps) {
  return <MuiButton {...props} />
}
