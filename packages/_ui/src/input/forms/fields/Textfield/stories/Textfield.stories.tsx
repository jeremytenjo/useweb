//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import Form from '../../../Form/src'

import { Textfield, type TextfieldProps } from './component'
import Docs from './Textfield.docs'

const defaultArgs: TextfieldProps = {
  name: 'Textfield',
}

export default {
  title: 'Input/Forms/fields/Textfield',
  args: defaultArgs,
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

  return (
    <Form onSubmit={onSubmit}>
      <Textfield {...args} />
    </Form>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}

// const variantArgs: TextfieldProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
