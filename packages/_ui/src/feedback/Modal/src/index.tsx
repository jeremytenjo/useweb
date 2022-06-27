import React from 'react'
import Box, { type BoxProps } from '@mui/material/Box'
import Backdrop from '@mui/material/Backdrop'
import MuiModal, { type ModalProps as MuiModalProps } from '@mui/material/Modal'
import Fade from '@mui/material/Fade'

export type ModalProps = {
  open: boolean
  onClose: any
  children: any
  sx?: BoxProps['sx']
} & MuiModalProps

export default function Modal({ open, onClose, children, sx = {} }: ModalProps) {
  return (
    <MuiModal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        sx: {
          backdropFilter: 'blur(12.7465px)',
          background: 'linear-gradient(180deg,#dfdfdf 0%, rgba(255, 245, 245, 0) 100%)',
        },
      }}
      sx={{
        '&:focus': {
          outline: 'none',
        },
        outline: 'none',
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'fixed',
            width: 'fit-content',
            bgcolor: 'background.paper',
            boxShadow: 24,
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '20px',
            ...sx,
          }}
        >
          {children}
        </Box>
      </Fade>
    </MuiModal>
  )
}
