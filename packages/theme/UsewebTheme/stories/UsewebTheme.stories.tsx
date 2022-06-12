//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import { type UsewebThemeProps } from './component'
import Docs from './UsewebTheme.docs'

const defaultArgs: UsewebThemeProps = {
  name: 'UsewebTheme',
}

export default {
  title: 'Theme/UsewebTheme',
  args: defaultArgs,
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: Docs,
    },
  },
}

const Template = () => {
  return (
    <>
      UsewebTheme
      {/* <UsewebTheme {...args} /> */}
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}

// const variantArgs: UsewebThemeProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
