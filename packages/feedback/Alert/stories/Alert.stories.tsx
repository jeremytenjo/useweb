//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import { Alert, type AlertProps } from './component'
import Docs from './Alert.docs'

const defaultArgs: AlertProps = {
  children: <>Alert</>,
}

export default {
  title: 'Input/Alert',
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
      <Alert {...args} />
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}

// const variantArgs: AlertProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
