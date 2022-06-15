//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import { NextApiTester, type NextApiTesterProps } from './component'
import Docs from './NextApiTester.docs'

const defaultArgs: NextApiTesterProps = {
  name: 'NextApiTester',
}

export default {
  title: 'Data/NextApiTester',
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
      <NextApiTester {...args} />
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}

// const variantArgs: NextApiTesterProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
