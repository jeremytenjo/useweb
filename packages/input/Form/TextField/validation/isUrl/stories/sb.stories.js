import { storiesOf } from '@storybook/react'

import B from '../../../../../../storybook/variationBlock/index'
import Button from '../../../../../Button'
import Form from '../../../..'
import TextField from '../../../styles/1'

// Test data
const placeholder = 'this is a Placeholder'

const Variations = () => {
  const [submitValue, setsubmitValue] = useState(null)
  const handleSubmit = ({ exampleField1 }) => {
    setsubmitValue(exampleField1)
  }

  return (
    <B title='required'>
      <Form onSubmitSuccess={handleSubmit}>
        <TextField
          placeholder={placeholder}
          name='exampleField1'
          errorMessage='this is an error message'
          validation={[{ name: 'isUrl', message: 'Input is not an URL' }]}
        />
        <br />
        <Button
          dataCy='textfield_submitButton'
          type='submit'
          text='Submit'
          color='secondary'
        />
        <br />
        <br />
        <span>value:{submitValue}</span>
      </Form>
    </B>
  )
}

// Stories
storiesOf('Lib/Input/Form/TextField/Validation', module).add('isUrl', () => (
  <Variations />
))
