import Image from '../../media/images/Image/index'
import Text from '../Text'

import { defaultProps, propTypes } from './props'
import { Wrapper } from './styles'

const Avatar = ({
  color,
  name,
  src,
  onClick,
  size,
  radius,
  letterColor,
  borderColor,
  paddedBorder,
}) => {
  const border = {
    border: `2px solid ${
      borderColor ? `var(--color-${borderColor})` : paddedBorder ? 'transparent' : null
    } `,
  }
  let initials = name.split(' ')

  initials =
    initials.length > 1
      ? initials[0].substring(0, 1) + initials[1].substring(0, 1)
      : initials[0].substring(0, 1)

  return (
    <Wrapper
      color={color}
      src={src}
      radius={radius}
      size={size}
      paddedBorder={paddedBorder}
    >
      {src ? (
        <Image
          src={src}
          onClick={onClick}
          size={size}
          borderRadius={radius}
          styles={{ ...border, width: size, height: size }}
        />
      ) : (
        <Text text={initials} color={letterColor} />
      )}
    </Wrapper>
  )
}

Avatar.defaultProps = defaultProps
Avatar.propTypes = propTypes

export default memo(Avatar)
