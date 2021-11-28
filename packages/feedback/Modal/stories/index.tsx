import React from 'react'
import { Meta } from '@storybook/react'

import Modal from '../src'

export default {
  title: 'packages/feedback/modal',
  component: Modal,
  args: {
    show: null,
  },
  // https://storybook.js.org/docs/react/essentials/controls#annotation
  argTypes: {
    show: {
      control: 'boolean',
      defaultValue: null,
    },
  },
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: () => <>ssss</>,
    },
  },
} as Meta

const Template = (args) => {
  return (
    <>
      Background text
      <Modal {...args}>
        <div>hello Modal</div>
      </Modal>
    </>
  )
}

export const Example = Template.bind({})
