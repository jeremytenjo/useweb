import React, { memo, forwardRef } from 'react'

import { BoxWrapper } from './styles'

type Props = {
  children?: any
  name?: string
  styles?: object
}

const Box = ({ children, name, styles = {}, ...rest }: Props, ref) => {
  return (
    <BoxWrapper
      ref={ref}
      styles={{ display: 'grid', ...styles }}
      data-box-name={name}
      data-cy={name}
      {...rest}
    >
      {children}
    </BoxWrapper>
  )
}

export default memo(forwardRef(Box))
