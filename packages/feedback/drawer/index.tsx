import React, { useEffect } from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { func, bool, oneOf, object } from 'prop-types'

const defaultProps = {
  disableSwipeToOpen: true,
  position: 'left',
  open: null,
  PaperProps: {
    bottom: { style: { borderRadius: '20px 20px 0 0' } },
    top: { style: { borderRadius: '0 0 20px 20px' } },
  },
  onClose: () => null,
}

const propTypes = {
  disableSwipeToOpen: bool,
  position: oneOf(['left', 'top', 'right', 'bottom']),
  open: bool,
  onClose: func,
  PaperProps: object,
}

const Drawer = ({
  open,
  position,
  children,
  onClose,
  disableSwipeToOpen,
  PaperProps,
  // testProp = true,
}) => {
  useEffect(() => {
    open !== null && toggleDrawer()
  }, [open])

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
  }

  return (
    <SwipeableDrawer
      PaperProps={PaperProps[position]}
      disableSwipeToOpen={disableSwipeToOpen}
      anchor={position}
      open={!!open}
      onClose={onClose}
      onOpen={() => toggleDrawer()}
    >
      {children}
    </SwipeableDrawer>
  )
}

Drawer.defaultProps = defaultProps
Drawer.propTypes = propTypes

export default Drawer
