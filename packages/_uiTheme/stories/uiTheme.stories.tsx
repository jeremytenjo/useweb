//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import { type UiThemeProps } from './component'
import Docs from './uiTheme.docs'

const defaultArgs: UiThemeProps = {
  children: undefined,
  theme: {},
}

export default {
  title: 'theme/uiTheme',
  args: defaultArgs,
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: Docs,
    },
  },
}

const Template = (args) => {
  return <>uiTheme</>
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}

// const variantArgs: UiThemeProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
