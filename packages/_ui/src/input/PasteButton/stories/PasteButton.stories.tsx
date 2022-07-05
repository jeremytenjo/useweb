//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import PasteButton, { type PasteButtonProps } from '../src/index'

import Docs from './PasteButton.docs.mdx'

export default {
  title: 'lib/components/basic/misc/PasteButton',
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
    <>
      <PasteButton {...args} />
    </>
  )
}

export const Default = Template.bind({}) as any

const defaultArgs: PasteButtonProps = {
  onPaste: ({ clipboardData }) => console.log(clipboardData),
}

Default.args = defaultArgs

// export const Variant = Template.bind({}) as any

// const VariantArgs: PasteButtonProps = {
//  ...defaultArgs,
//  name: 'World',
// }

// Variant.args = VariantArgs
