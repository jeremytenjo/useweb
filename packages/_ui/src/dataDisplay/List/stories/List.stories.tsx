//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import { List, type ListProps } from './component'
import Docs from './List.docs'

const defaultArgs: ListProps = {
  data: [<p key='1'>hola</p>, <p key='2'>hola</p>],
  ListItemComponent: () => <p>hola</p>,
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

const variantArgs: ListProps = {
  data: [<p key='1'>hola</p>, <p key='2'>hola</p>],
  ListItemComponent: () => (
    <li>
      <p>hola</p>
    </li>
  ),
  AdjacentItem: () => <p>AdjacentItem</p>,
}

export const WithAdjacentItem = {
  ...Default,
  args: variantArgs,
}
