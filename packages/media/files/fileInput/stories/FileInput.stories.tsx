import React from 'react'

import B from '../../../../storybook/variationBlock/index'
import Form from '../../../../_ui/src/input/forms/Form/src'
import FileInput from '..'

export default {
  title: 'Input/File Input',
}

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
        <Form onSubmit={handleForm}>
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

const Template = (args) => {
  return (
    <>
      <Variations {...args} />
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}
