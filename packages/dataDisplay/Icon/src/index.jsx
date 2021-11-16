import React, { memo } from 'react'

import { WrapperIcon, Wrapper } from './styles'
import { defaultProps, propTypes } from './props'

const Icon = ({
  children,
  isStroke,
  style,
  color,
  onClick,
  size,
  dark,
  outlined,
  link,
  backgroundColor,
  plain,
  backgroundSize,
  center,
  router,
  label,
  height,
  width,
  wrapperStyles,
  customChildren,
}) => {
  const { push } = router
  const handleClick = (e) => {
    link && push(link)
    onClick(e)
  }

  return (
    <Wrapper label={label} data-name='icon-wrapper' style={wrapperStyles}>
      <WrapperIcon
        plain={plain}
        style={style}
        color={color}
        onClick={handleClick}
        size={size}
        dark={dark}
        outlined={outlined}
        backgroundColor={backgroundColor}
        isStroke={isStroke}
        backgroundSize={backgroundSize}
        center={center}
        height={height}
        width={width}
      >
        {children}
      </WrapperIcon>
      {customChildren}
    </Wrapper>
  )
}

Icon.defaultProps = defaultProps
Icon.propTypes = propTypes

export default memo(Icon)
