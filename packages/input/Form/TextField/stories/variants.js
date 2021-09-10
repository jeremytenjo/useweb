import Form from '../..'
import IconPlusMaterial from '../../../../dataDisplay/Icon/library/IconPlusMaterial/index'
import { V, B } from '../../../../storybook/ui'

const placeholder = 'this is a Placeholder'

const Variants = ({ Component: TextField }) => {
  const [, , setsubmitValue] = useState(null)
  const handleSubmit = ({ exampleField }) => {
    setsubmitValue(exampleField)
  }

  return (
    <>
      <B title='default' noBackground>
        <TextField placeholder={placeholder} name='default_textfield' />
      </B>

      <B title='clear after input' noBackground>
        <Form onSubmitSuccess={handleSubmit}>
          <TextField placeholder={placeholder} name='textfield2' clearOnSubmit />
        </Form>
      </B>
      <B title='save input in session storage' noBackground>
        <Form onSubmitSuccess={handleSubmit}>
          <TextField
            placeholder={placeholder}
            name='textfieldsetInSessionStorage'
            setInSessionStorage
          />
        </Form>
      </B>

      <B title='color=secondary' noBackground>
        <TextField color='secondary' placeholder={placeholder} />
      </B>

      <B title='all color' noBackground>
        <TextField
          placeholder={placeholder}
          backgroundColor='primaryLighter'
          textColor='primaryDarker'
          foregroundColor='primaryDarker'
        />
      </B>

      <B title='round' noBackground>
        <TextField round placeholder={placeholder} />
      </B>
      <B title='Icon Left' noBackground>
        <TextField placeholder={placeholder} IconLeft={IconPlusMaterial} />
      </B>
      <B title='Icon  right' noBackground>
        <TextField placeholder={placeholder} IconRight={IconPlusMaterial} />
      </B>
      <B title='Icon  right round' noBackground>
        <TextField placeholder={placeholder} round IconRight={IconPlusMaterial} />
      </B>
    </>
  )
}

export default ({ onlyBase }) =>
  V({
    dir: 'input/Form/TextField',
    styles: require.context('../styles', true, /index.js$/),
    Variants,
    onlyBase,
    noBase: true,
  })
