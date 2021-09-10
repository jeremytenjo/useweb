import { string, func, bool, object, oneOfType, node } from 'prop-types'

import Dots from '../../feedback/progress/dots'

export const defaultProps = {
  Wrapper: ({ children }) => children,
  ButtonInner: ({ children }) => children,
  LoadingCon: ({ children }) => children,
  outlined: null,
  active: null,
  icon: null,
  disabled: null,
  url: null,
  color: 'primary',
  typographyVariant: 'button',
  style: {},
  textStyle: {},
  text: 'Button',
  onClick: () => null,
  dataCy: null,
  loading: 'onlydefaultisstring, set bool when using',
  ProgressComponent: <Dots />,
  isInput: null,
  accept: '.jpg, .jpeg, .png',
  inputProps: null,
  activeColor: 'white',
  beforeIcon: undefined,
  afterIcon: undefined,
}

export const propTypes = {
  outlined: bool,
  active: bool,
  disabled: bool,
  color: string,
  url: string,
  text: oneOfType([node, string]),
  style: object,
  textStyle: object,
  onClick: func,
  dataCy: string,
  loading: oneOfType([bool, string]),
  isInput: bool,
  inputProps: object,
}
