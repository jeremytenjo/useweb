import { string, bool, func } from 'prop-types'

export const defaultProps = {
  color: 'primary',
  text: 'Chip',
  toRemove: null,
  onClick: () => null,
}

export const propTypes = {
  color: string,
  text: string,
  toRemove: bool,
  onClick: func,
}
