//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import { Palette, type PaletteProps } from './component'
import Docs from './Palette.docs'

const defaultArgs: PaletteProps = {
  name: 'Theme/Design System/Palette',
}

export default {
  title: 'Theme/Design System/Palette',
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
      <Palette {...args} />
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}

// const variantArgs: PaletteProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
