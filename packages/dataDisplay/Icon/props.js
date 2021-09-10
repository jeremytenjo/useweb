import { string, func, object, bool } from 'prop-types'

export const defaultProps = {
  style: {},
  wrapperStyles: {},
  color: 'white',
  onClick: () => null,
  backgroundSize: '10px',
  size: '24px',
  backgroundColor: null,
  labelStyles: { color: 'primaryDarker' },
  dark: null,
  outlined: null,
  link: null,
  inputProps: null,
  plain: null,
  customChildren: null,
  label: { tag: 'span', variant: 'body2', text: null },
  router: { push: () => null },
  rawStyles: '',
}

export const propTypes = {
  style: object,
  wrapperStyles: object,
  color: string,
  backgroundColor: string,
  onClick: func,
  size: string,
  label: object,
  dark: bool,
  plain: bool,
  outlined: bool,
  link: string,
  rawStyles: string,
  inputProps: object,
  router: object,
}
