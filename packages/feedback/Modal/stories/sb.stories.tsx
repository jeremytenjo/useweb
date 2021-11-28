import React from 'react'

import Modal from '../src'

export default {
  title: 'feedback/modal',
  component: Modal,
  // https://storybook.js.org/docs/react/essentials/controls#annotation
  args: {
    show: null,
  },
  argTypes: {
    show: {
      control: 'boolean',
    },
  },
}

const Template = (args) => (
  <>
    sd
    <Modal {...args}>
      <div>hello Modal</div>
    </Modal>
  </>
)

export const Example = Template.bind({})
Example.args = {
  show: null,
}

export const Show = Template.bind({})
Show.args = {
  show: true,
}
