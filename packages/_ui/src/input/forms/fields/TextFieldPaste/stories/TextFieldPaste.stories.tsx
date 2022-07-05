//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import Form from '../../../Form/src'
import TextFieldPaste, { type TextFieldPasteProps } from '../src'

import Docs from './TextFieldPaste.docs.mdx'

export default {
  title: 'lib/input/forms/TextFieldPaste',
  args: {},
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: Docs,
    },
  },
}

const Template = (args) => {
  return (
    <Form sx={{ p: 2 }} onSubmit={(formData) => console.log(formData)}>
      <TextFieldPaste {...args} />
    </Form>
  )
}

export const Default = Template.bind({}) as any

const defaultArgs: TextFieldPasteProps = {
  onPaste: ({ clipboardData }) => console.log(clipboardData),
  name: 'tikTokLink',
  required: 'TikTok link is required',
  placeholder: 'Paster TikTok link here',
}

Default.args = defaultArgs

// export const Variant = Template.bind({}) as any

// const VariantArgs: TextFieldPasteProps = {
//  ...defaultArgs,
//  name: 'World',
// }

// Variant.args = VariantArgs
