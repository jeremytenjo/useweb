import React from 'react'
import MuiIconButton, { type IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton'

export type IconButtonProps = MuiIconButtonProps & {
  name: string
}

/**
 * [API](https://mui.com/material-ui/api/button/)
 * 
 * [Demo](https://mui.com/material-ui/react-button/)
 * 
 * @example 
 * <IconButton>Hello</IconButton>
 */
export default function IconButton(props: IconButtonProps) {
  return <MuiIconButton {...props} aria-label={props.name} />
}
