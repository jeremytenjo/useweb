import React from 'react'
import { Meta } from '@storybook/react'

import useOnPullToRefresh from '../src'

import Docs from './docs'

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
