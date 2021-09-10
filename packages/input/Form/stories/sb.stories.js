import { storiesOf } from '@storybook/react'

import B from '../../../storybook/variationBlock/index'
import Button from '../../Button'
import TextField from '../TextField/styles/1/index'
import Select from '../Select/styles/3'
import TextArea from '../TextArea/styles/1'
import Text from '../../../dataDisplay/Text'
import Form from '..'

const General = () => {
  const [result, setresult] = useState('')
  const handleSubmitSuccess = (values) => {
    console.log(values)
    setresult('success')
  }
  const handleSubmitFail = () => setresult('fail')

  const data = [
    { value: 'corruption', label: 'Corruption' },
    { value: 'lies', label: 'Lies' },
  ]

  return (
    <B title='default'>
      <Form onSubmitSuccess={handleSubmitSuccess} onSubmitFail={handleSubmitFail}>
        <TextField
          type='text'
          placeholder='textfield1'
          name='textfield1'
          validation={[{ name: 'required' }]}
        />

        <br />
        <br />

        <TextArea placeholder='Type here...' name='theTextarea' />

        <br />
        <br />

        <Select data={data} name='select' label={<Text text='Corruption' />} />

        <br />
        <br />

        <Button
          dataCy='upload_button'
          text='Upload'
          color='secondary'
          inputProps={{
            errorMessage: 'Please upload profile picture',
            name: 'file_upload',
          }}
        />

        <br />
        <br />

        <Button type='submit' dataCy='form_submit_button' text='Submit' />
      </Form>

      <br />

      <p data-cy='form_result'>Result: {result}</p>
    </B>
  )
}

storiesOf('Lib/Input/Form', module).add('Full Example', () => <General />)
