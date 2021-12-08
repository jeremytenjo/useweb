import React from 'react'

import { defaultProps, propTypes } from './props'

export default function Button({
  Wrapper,
  ButtonInner,
  color,
  text,
  onClick,
  disabled,
  active,
  outlined,
  style,
  dataCy,
  loading,
  url,
  beforeIcon,
  afterIcon,
  size,
  type = 'button',
  ...rest
}) {
  const isLoading = typeof loading !== 'string' ? loading : false
  const matchesUrl = url && location.pathname === url

  return (
    <Wrapper>
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
          {text}
          {afterIcon && afterIcon}
        </ButtonInner>
      </button>
    </Wrapper>
  )
}

Button.defaultProps = defaultProps
Button.propTypes = propTypes
