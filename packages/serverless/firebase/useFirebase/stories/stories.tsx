import React from 'react'
import { Meta } from '@storybook/react'

import Docs from './docs'

export default {
  title: 'Serverless/Firebase/useFirebase',
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: () => <Docs />,
    },
  },
} as Meta

const Template = (args) => {
  return <div>add example </div>
}

export const Example = Template.bind({})
Example.args = {}
