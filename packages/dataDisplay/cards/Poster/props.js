import { string, func, bool, oneOfType, shape, number } from 'prop-types'

export const defaultProps = {
  src: null,
  label: null,
  noAnimation: null,
  size: 184,
  alt: 'poster',
  backgroundColor: 'blackOpaque',
  onClick: () => null,
}

export const propTypes = {
  src: string,
  text: string,
  label: string,
  onClick: func,
  noAnimation: bool,
  lastAiredEpisode: shape({
    season: oneOfType([string, number]),
    episode: oneOfType([string, number]),
  }),
}
