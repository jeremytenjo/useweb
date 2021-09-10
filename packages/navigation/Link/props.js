import { string, object } from 'prop-types'

export const defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
  href: '',
  styles: {},
}

export const propTypes = {
  target: string,
  rel: string,
  href: string,
  styles: object,
}
