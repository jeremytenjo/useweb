//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import { Button, type ButtonProps } from './component'
import Docs from './Button.docs'

const defaultArgs: ButtonProps = {
  name: 'Button',
  children: <>Button</>,
}

export default {
  title: 'Input/Button',
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
      <Button {...args} />
      <iframe
        src='https://useweb.vercel.app/?path=/story/packages-feedback-modal--example&full=1&shortcuts=false&singleStory=true'
        width='800'
        height='260'
      ></iframe>
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}

// const variantArgs: ButtonProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
