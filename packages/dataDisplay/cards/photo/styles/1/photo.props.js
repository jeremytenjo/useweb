import { array, func, string, node, bool } from 'prop-types'

export const defaultProps = {
  onGoBack: () => null,
  onCardSwipe: () => null,
  onMenuOptionSelect: () => null,
  menuOptions: [],
  tags: [1, 2, 423, 4],
  goBackUrl: '',
  chidlren: () => null,
  onTagClick: () => null,
  onLike: () => null,
  onUnlike: () => null,
  photoUrl: null,
  likeable: null,
}

export const propTypes = {
  onGoBack: func,
  onCardSwipe: func,
  onTagClick: func,
  onMenuOptionSelect: func,
  onLike: func,
  onUnlike: func,
  menuOptions: array,
  tags: array,
  goBackUrl: string,
  chidlren: node,
  photoUrl: bool,
  likeable: bool,
}
