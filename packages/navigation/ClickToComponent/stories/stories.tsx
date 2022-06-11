import React from 'react'
import { Meta } from '@storybook/react'

import Docs from './docs'
import { ClickToComponent } from './component'

export default {
  title: 'Navigation/Components/ClickToComponent',
  component: ClickToComponent,
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: () => <Docs />,
    },
  },
} as Meta

const Template = (args) => {
  return (
    <>
      <ClickToComponent />
      <h1>hello</h1>
    </>
  )
}

export const Example = Template.bind({})
Example.args = {}
