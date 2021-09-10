import List from '../../dataDisplay/List/index'
import Animation from '../../utils/Animation/index'

import { defaultProps, propTypes } from './props'
import { Wrapper } from './styles'

export default function Autocomplete({ inputStyle }) {
  const listRef = useRef(null)

  const [Textfield, setTextField] = useState(null)
  const [showList, setshowList] = useState(null)

  useEffect(() => {
    importTextfield()
  }, [])

  const importTextfield = async () => {
    const mod = await import(`../Form/TextField/styles/${inputStyle}`)
    setTextField(mod.default({ onInput: handleInput }))
  }

  const handleInput = (value) => {
    setshowList(value !== '')
  }

  return (
    <Wrapper>
      {Textfield}
      <Animation name='showHide' show={showList} el={listRef} />
      <div ref={listRef} style={{ display: 'none' }}>
        <List direction='row'>
          <span>hello</span>
          <span>hello</span>
          <span>hello</span>
        </List>
      </div>
    </Wrapper>
  )
}

Autocomplete.defaultProps = defaultProps
Autocomplete.propTypes = propTypes
