import React from 'react'

import { Wrapper, Title, Content } from './styles'

const VariationBlock = ({
  children,
  title,
  style = {},
  contentStyle = {},
  titleStyle = {},
  containerId = '',
  background = [],
  titleColor = 'var(--color-primaryLighter)',
  color = 'white',
}) => {
  return (
    <Wrapper style={style}>
      <Title style={titleStyle || style} titleColor={titleColor}>
        {title}
      </Title>
      <Content
        style={contentStyle || style}
        id={containerId}
        background={background}
        color={color}
      >
        {children}
      </Content>
    </Wrapper>
  )
}

export default VariationBlock
