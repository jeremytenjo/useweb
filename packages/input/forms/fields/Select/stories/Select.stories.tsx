//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import { Select, type SelectProps } from './component'
import Docs from './Select.docs'

const defaultArgs: SelectProps = {
  name: 'Select',
}

export default {
  title: 'Select',
  args: defaultArgs,
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
      <Select {...args} />
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}

// const variantArgs: SelectProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
