//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import { AsyncTester, type AsyncTesterProps } from './component'
import Docs from './AsyncTester.docs'

const defaultArgs: AsyncTesterProps = {
  fn: () => 'this is the result',
  autoExec: true,
}

export default {
  title: 'Data/AsyncTester',
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
      <AsyncTester {...args} />
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}

// const variantArgs: AsyncTesterProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
