//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'
import TextField from '@useweb/textfield'

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

const Template = (args) => {
  const onSubmit = (values) => {
    console.log(values)
  }

  const options = [
    {
      label: 'Season 1',
      value: 1,
    },
  ]
  return (
    <>
      <Form onSubmit={onSubmit}>
        <TextField name='test-textfield' />
        {/* <Select label='Season' name='selected_season' options={options} /> */}
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