import React from 'react'
import { Meta } from '@storybook/react'

import Docs from './docs'
import useOnPullToRefresh from '../src'

export default {
  title: 'packages/Dom/usePullToRefresh',
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: () => <Docs />,
    },
  },
} as Meta

const Template = (args) => {
  useOnPullToRefresh(() => {
    console.log('refreshed')
  })

  return <div>Pull to refresh me</div>
}

export const Example = Template.bind({})
Example.args = {}
