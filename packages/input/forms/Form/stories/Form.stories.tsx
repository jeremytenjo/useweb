//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@useweb/textfield'
import Select from '@useweb/select'

import { Form } from './component'
import Docs from './Form.docs'

export default {
  title: 'Input/Forms/Form',
  args: {},
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: Docs,
    },
  },
}

const Template = () => {
  const onSubmit = (values) => {
    console.log(values)
  }

  const options = [
    {
      label: 'Season 1',
      value: 1,
    },
    {
      label: 'Season 2',
      value: 2,
    },
  ]

  return (
    <>
      <Form onSubmit={onSubmit}>
        <TextField name='test-textfield' />
        <Select label='Season' name='selected_season' options={options} />
        <Button type='submit'>Submit</Button>
      </Form>
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}

// const variantArgs: FormProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
