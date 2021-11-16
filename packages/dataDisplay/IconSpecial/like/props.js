import { bool, func } from 'prop-types'

export const defaultProps = {
  liked: null,
  onLike: () => null,
  onUnlike: () => null,
}

export const propTypes = {
  liked: bool,
  onLike: func,
  onUnlike: func,
}
