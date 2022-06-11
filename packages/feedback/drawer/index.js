import SwipeableDrawer from '@mui/material/SwipeableDrawer'

import { defaultProps, propTypes } from './props'

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
    open !== null && toggleDrawer(position, true)
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
      onOpen={() => toggleDrawer(position, true)}
    >
      {children}
    </SwipeableDrawer>
  )
}

Drawer.defaultProps = defaultProps
Drawer.propTypes = propTypes

export default memo(Drawer)
