import { BoxWrapper } from './styles'

const Box = ({ children, name, styles = {}, ...rest }, ref) => {
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
