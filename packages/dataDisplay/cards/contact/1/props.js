import { number, func, string } from 'prop-types'

export const defaultProps = {
  name: 'Name',
  rating: 5,
  city: '',
  photoUrl: null,
  onContactClick: () => null,
  onAvatarClick: () => null,
  onChatBtnClick: () => null,
}

export const propTypes = {
  name: string.isRequired,
  rating: number,
  city: string,
  photoUrl: string,
  onContactClick: func,
  onAvatarClick: func,
  onChatBtnClick: func,
}
