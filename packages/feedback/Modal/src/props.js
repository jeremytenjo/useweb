import { string, bool, func, node, object } from 'prop-types'

export const defaultProps = {
  children: null,
  show: null,
  style: {},
  overlayStyles: {},
  animationsStyles: {},
  animationStyle: 'centerOut',
  onClose: () => null,
}

export const propTypes = {
  children: node,
  style: object,
  overlayStyles: object,
  animationsStyles: object,
  show: bool,
  animationStyle: string,
  onClose: func,
}
