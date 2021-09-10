import Link from '../../navigation/router/Link'
import Text from '../../dataDisplay/Text'
import Animation from '../../utils/Animation'

import { defaultProps, propTypes } from './props'

const Button = ({
  Wrapper,
  ButtonInner,
  LoadingCon,
  color,
  text,
  onClick,
  disabled,
  active,
  outlined,
  style,
  dataCy,
  loading,
  typographyVariant,
  ProgressComponent,
  url,
  beforeIcon,
  afterIcon,
  size,
  type = 'button',
  ...rest
}) => {
  const textColor = disabled ? 'disabledDarker' : outlined ? 'white' : `${color}Darker`
  const isLoading = typeof loading !== 'string' ? loading : false
  const matchesUrl = url && location.pathname === url
  const Redirect = url ? Link : Fragment
  const redirectProps = url ? { to: url } : null

  return (
    <Wrapper>
      <Redirect {...redirectProps}>
        <button onClick={disabled ? () => null : onClick} data-cy={dataCy} type={type}>
          <ButtonInner
            color={color}
            disabled={disabled}
            active={active}
            outlined={outlined}
            beforeIcon={beforeIcon}
            afterIcon={afterIcon}
            style={style}
            isLoading={isLoading}
            matchesUrl={matchesUrl}
            size={size}
            {...rest}
          >
            {beforeIcon && beforeIcon}
            <Text
              text={text}
              variant={typographyVariant}
              styles={{ color: textColor, transform: 'translateY(1px)' }}
            />
            {afterIcon && afterIcon}
          </ButtonInner>
        </button>
      </Redirect>

      <Animation name='showHide' show={isLoading}>
        <LoadingCon color={color}>{ProgressComponent && ProgressComponent}</LoadingCon>
      </Animation>
    </Wrapper>
  )
}

Button.defaultProps = defaultProps
Button.propTypes = propTypes

export default memo(Button)
