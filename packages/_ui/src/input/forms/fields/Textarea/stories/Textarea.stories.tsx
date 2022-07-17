//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import Form from '../../../Form/src'

import { Textarea, type TextareaProps } from './component'
import Docs from './Textarea.docs'

const defaultArgs: TextareaProps = {
  name: 'Textarea',
}

export default {
  title: 'Input/Forms/fields/Textarea',
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
      <Textarea {...args} />
    </Form>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}

// const variantArgs: TextareaProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
