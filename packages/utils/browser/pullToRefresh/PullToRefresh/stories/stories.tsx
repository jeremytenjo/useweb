import React from 'react'
import { Meta } from '@storybook/react'

import Docs from './docs'
import PullToRefresh from '../src'

export default {
  title: 'packages/Dom/PullToRefresh',
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: () => <Docs />,
    },
  },
} as Meta

const Template = (args) => {
  const onPullToRefresh = () => {
    console.log('HERE!')
  }

  return (
    <PullToRefresh onPullToRefresh={onPullToRefresh}>Pull to refresh me</PullToRefresh>
  )
}

export const Example = Template.bind({})
Example.args = {}
