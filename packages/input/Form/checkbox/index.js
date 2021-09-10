import { defaultProps, propTypes } from './props'

const CheckBox = ({ Wrapper }) => {
  return (
    <Wrapper>
      <input type='checkbox' name='c1' id='c1' />
      <label htmlFor='c1'>Checkbox</label>
    </Wrapper>
  )
}

CheckBox.defaultProps = defaultProps
CheckBox.propTypes = propTypes

export default memo(CheckBox)
