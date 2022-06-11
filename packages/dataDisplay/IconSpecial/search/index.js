import Form from '../../../../input/Form/'
import Box from '../../../Box/index'
import Textfield from '../../../../input/Form/TextField/styles/1/index'
import Animation from '../../../../utils/Animation'
import IconCloseFeather from '../../Icon/library/IconCloseFeather'
import IconSearchFeather from '../../Icon/library/IconSearchFeather'
import useKeyPress from '../../../../feedback/useKeyPress'

import { defaultProps, propTypes } from './props'
import { Wrapper, WrapperInput } from './styles'

const IconSearch = ({
  backgroundColor,
  onSubmit,
  boxShadow,
  inputName,
  styles,
  placeholder,
}) => {
  const [show, setShow] = useState(null)
  const Icon = show ? IconCloseFeather : IconSearchFeather
  useEffect(() => {
    const inputEl = document.querySelector(`input[id=${inputName}]`)
    if (show) inputEl.focus()
    else inputEl.blur()
  }, [show])

  const toggleShow = () => setShow(!show)

  const showNavBar = () => {
    setShow(true)
  }

  useKeyPress('f', showNavBar)

  const hideNavBar = () => {
    setShow(false)
  }

  useKeyPress('Escape', hideNavBar)

  return (
    <Box styles={Wrapper}>
      <Animation show={show} style={{ position: 'absolute', width: 250 }}>
        <Box styles={WrapperInput}>
          <Form onSubmitSuccess={onSubmit}>
            <Textfield name={inputName} placeholder={placeholder} />
          </Form>
        </Box>
      </Animation>

      <Icon
        style={styles}
        onClick={toggleShow}
        backgroundColor={backgroundColor}
        boxShadow={boxShadow}
      />
    </Box>
  )
}

IconSearch.defaultProps = defaultProps
IconSearch.propTypes = propTypes

export default memo(IconSearch)
