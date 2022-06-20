//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

// import { FirebaseFunctionTester, type FirebaseFunctionTesterProps } from './component'
import Docs from './FirebaseFunctionTester.docs'

// const defaultArgs: FirebaseFunctionTesterProps = {
//   functionName: 'helloWorld',
// }

export default {
  title: 'serverless/firebase/utils/FunctionTester',
  // args: defaultArgs,
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
      {/* <FirebaseFunctionTester {...args} /> */}
      update this when use-firebase is published
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}

// const variantArgs: FirebaseFunctionTesterProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
