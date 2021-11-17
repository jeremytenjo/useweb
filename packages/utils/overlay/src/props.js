import { bool, func, string } from 'prop-types'

export const defaultProps = {
  show: null,
  onClick: () => null,
  dataCy: null,
  appendToBody: null,
  wrapperStyles: {},
}

export const propTypes = {
  show: bool,
  onClick: func,
  backgroundcolor: string,
  dataCy: string,
}
