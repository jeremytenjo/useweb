import React from 'react'
import { Meta } from '@storybook/react'

import Docs from './firebase.docs'

export default {
  title: 'Serverless/Firebase/useFirebase',
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: () => <Docs />,
    },
  },
} as Meta

const Template = () => {
  return <div>add example </div>
}

export const Setup = Template.bind({})
Setup.args = {}
