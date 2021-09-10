import Image from '../../../../../media/images/Image'
import IconBack from '../../../../Icon/special/back'
import Menu from '../../../../../input/menu/styles/1'
import Donut from '../../../../../feedback/progress/Donut'
import LikeButton from '../../../../Icon/special/like'
import Box from '../../../../Box'

import { Wrapper, TopRow, ImageCon, donutStyle, LikeIconCon } from './photo.styles'
import { defaultProps } from './photo.props'

const CardPhoto = ({
  photoUrl,
  onGoBack,
  goBackUrl,
  menuOptions,
  onMenuOptionSelect,
  children,
  likeable,
  liked,
  onLike,
  onUnlike,
  style,
}) => {
  const goBack = () => onGoBack()
  const handleOnLike = () => onLike()
  const handleOnUnlike = () => onUnlike()

  //Template
  return (
    <Wrapper style={style}>
      <Box styles={TopRow}>
        <IconBack to={goBackUrl} onGoBack={goBack} />
        {menuOptions.length > 0 && (
          <Menu options={menuOptions} onSelect={onMenuOptionSelect} />
        )}
      </Box>
      <ImageCon>
        {photoUrl ? (
          <Image src={photoUrl} cursor='default' position='top' width='100%' />
        ) : (
          <Donut style={donutStyle} />
        )}
        {likeable && (
          <LikeIconCon>
            <LikeButton liked={liked} onLike={handleOnLike} onUnlike={handleOnUnlike} />
          </LikeIconCon>
        )}
      </ImageCon>
      {children}
    </Wrapper>
  )
}

CardPhoto.defaultProps = defaultProps

export default memo(CardPhoto)
