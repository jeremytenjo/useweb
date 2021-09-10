import { func, bool, oneOf, object } from 'prop-types'

export const defaultProps = {
  disableSwipeToOpen: true,
  position: 'left',
  open: null,
  PaperProps: {
    bottom: { style: { borderRadius: '20px 20px 0 0' } },
    top: { style: { borderRadius: '0 0 20px 20px' } },
  },
  onClose: () => null,
}

export const propTypes = {
  disableSwipeToOpen: bool,
  position: oneOf(['left', 'top', 'right', 'bottom']),
  open: bool,
  onClose: func,
  PaperProps: object,
}
