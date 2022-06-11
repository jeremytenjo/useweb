import React from 'react'
import MuiDialog, { type DialogProps as MuiDialogProps } from '@mui/material/Dialog'

export type DialogProps = MuiDialogProps 

/**
 * [API](https://mui.com/material-ui/api/Dialog/)
 * 
 * [Demo](https://mui.com/material-ui/react-Dialog/)
 * 
 * @example 
 * <Dialog open={open} onClose={closeDialog}>Hello</Dialog>
 */
export default function Dialog(props: DialogProps) {
  return <MuiDialog {...props} />
}
