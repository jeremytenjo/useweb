//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import { List, type ListProps } from './component'
import Docs from './List.docs'

const defaultArgs: ListProps = {
  ListItemComponent: () => <p />,
  data: [<p key='1'>hello</p>],
}

export default {
  title: 'Data Display/List',
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
      <List {...args} />
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}

// const variantArgs: ListProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
