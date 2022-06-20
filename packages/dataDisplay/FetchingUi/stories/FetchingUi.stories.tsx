//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import { FetchingUi, type FetchingUiProps } from './component'
import Docs from './FetchingUi.docs'

const defaultArgs: FetchingUiProps = {
  result: {
    example1: [
      {
        name: 'test01',
        age: 18,
        gender: 0,
        student: true,
        children: null,
      },
      {
        name: 'test02',
        age: 19,
        gender: 1,
        student: true,
        children: null,
      },
    ],
    example2: {
      friuts: ['apple', 'grape', 'jujube', 'pear'],
      transport: ['taxi', 'bus', 'metro', 'plane', 'train'],
    },
  },
}

export default {
  title: 'Data Display/FetchingUi',
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
      <FetchingUi {...args} />
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}

// const variantArgs: FetchingUiProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
