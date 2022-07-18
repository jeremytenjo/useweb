//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import { InView, type InViewProps } from './component'
import Docs from './InView.docs'

const defaultArgs: InViewProps = {
  name: 'InView',
}

export default {
  title: 'InView',
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
      <InView {...args} />
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}

// const variantArgs: InViewProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
