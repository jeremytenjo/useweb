//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import { FetchingUi, type FetchingUiProps } from './component'
import Docs from './FetchingUi.docs'

const defaultArgs: FetchingUiProps = {
  name: 'Data Display/FetchingUi',
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
