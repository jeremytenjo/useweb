import Box from '@useweb/box'
import useClickOutside from '../'

export default () => {
  const boxRef = useRef(null)

  const onClickOutside = () => {
    alert('clicked outside green box')
  }

  useClickOutside(boxRef, onClickOutside)

  return (
    <Box ref={boxRef} styles={boxStyles}>
      Click outside this box
    </Box>
  )
}

const boxStyles = {
  width: '200px',
  height: '200px',
  backgroundColor: 'primary',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
}
