import React from 'react'
import MuiAlert, { type AlertProps as MuiAlertProps, AlertColor as MuiAlertColor } from '@mui/material/Alert'

export type AlertProps = MuiAlertProps 

export type AlertColor = MuiAlertColor 

/**
 * [API](https://mui.com/material-ui/api/button/)
 * 
 * [Demo](https://mui.com/material-ui/react-button/)
 * 
 * @example 
 * <Alert>Hello</Alert>
 */
export default function Alert(props: AlertProps) {
  return <MuiAlert {...props} />
}
