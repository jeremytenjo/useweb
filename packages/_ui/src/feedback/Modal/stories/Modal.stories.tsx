//https://storybook.js.org/docs/react/writing-docs/docs-page
import React, { useState } from 'react'

import { Modal, type ModalProps } from './component'
import Docs from './Modal.docs'

const defaultArgs: ModalProps = {
  open: true,
  onClose: null,
  children: 'Modal',
}

export default {
  title: 'Feedback/Modal',
  args: defaultArgs,
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: Docs,
    },
  },
}

const Template = (args) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen((s) => !s)}>Toggle</button>

      <Modal {...args} open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}

// const variantArgs: ModalProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
