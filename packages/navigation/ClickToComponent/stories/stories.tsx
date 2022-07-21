import React from 'react'
import { Meta } from '@storybook/react'

import Docs from './docs'
import { ClickToComponent } from './component'

export default {
  title: 'Navigation/ClickToComponent',
  component: ClickToComponent,
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: () => <Docs />,
    },
  },
} as Meta

const Template = () => {
  return (
    <>
      <ClickToComponent />
      <App />
    </>
  )
}

const App = () => {
  return (
    <div>
      <Button />
      <Box />
    </div>
  )
}

const Button = () => {
  return <button>hello button component</button>
}

const Box = () => {
  return <div>hello Box component</div>
}

export const Example = Template.bind({})
Example.args = {}
