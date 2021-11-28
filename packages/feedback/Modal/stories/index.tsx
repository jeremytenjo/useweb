import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import ModalDocs from './docs'
import { Modal } from './argtypes'

export default {
  title: 'packages/feedback/Modal',
  component: Modal,
  args: {
    show: null,
  },
  // // https://storybook.js.org/docs/react/essentials/controls#annotation
  // argTypes: {
  //   show: {
  //     control: 'boolean',
  //     defaultValue: null,
  //   },
  // },
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: () => <ModalDocs />,
    },
  },
} as Meta

const Template = (args) => {
  const [show, setShow] = useState(args.show)
  return (
    <>
      Background text
      <Modal {...args} show={show} onClose={() => setShow(false)}>
        <div>Hello Modal</div>
      </Modal>
    </>
  )
}

export const Example = Template.bind({})
