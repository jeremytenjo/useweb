import { defaultProps, propTypes } from './props'
import { Wrapper } from './styles'

const Dropdown = ({ inputStyle }) => {
  const [Textfield, setTextField] = useState(null)

  useEffect(() => {
    importTextfield()
  }, [])

  const importTextfield = async () => {
    const mod = await import(`../Form/TextField/styles/${inputStyle}`)
    setTextField(mod.default)
  }

  console.log(Textfield)

  return <Wrapper>{Textfield}</Wrapper>
}

Dropdown.defaultProps = defaultProps
Dropdown.propTypes = propTypes

export default memo(Dropdown)
