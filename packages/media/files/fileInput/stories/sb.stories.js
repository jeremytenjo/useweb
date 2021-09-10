import { storiesOf } from '@storybook/react'

import B from '../../../../storybook/variationBlock/index'
import Form from '../../../../input/Form'
import FileInput from '..'

const Variations = () => {
  const handleForm = (e) => {
    console.log(e)
  }
  return (
    <>
      <B title='Single File' noBackground style={{ width: 'auto' }}>
        <FileInput onInput={(e) => console.log(e)} />
      </B>

      <B title='Multiple Files' noBackground style={{ width: 'auto' }}>
        <FileInput multiple onInput={(e) => console.log(e)}>
          Upload Multiple
        </FileInput>
      </B>

      <B title='In a Form'>
        <Form onSubmitSuccess={handleForm}>
          <FileInput
            data-name='file_input'
            validation={[{ name: 'required', message: 'required' }]}
          >
            <button>Upload file</button>
          </FileInput>

          <br />
          <br />
          <button type='submit'>Submit</button>
        </Form>
      </B>
    </>
  )
}

storiesOf('Lib/Input/Form/File Input', module).add('Example', () => <Variations />)
