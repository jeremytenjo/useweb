import React from 'react'
import { Meta } from '@storybook/react'

import Docs from './docs.mdx'
import { Introduction } from './component'

export default {
  title: 'Introductionsss',
  component: Introduction,
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: Docs,
    },
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
} as Meta

const Template = (args) => {
  return <Introduction {...args} />
}

export const Example = Template.bind({})
