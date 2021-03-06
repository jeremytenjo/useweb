//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import { Palette, type PaletteProps } from './component'
import Docs from './Palette.docs'

const defaultArgs: PaletteProps = {
  colors: {
    primary: {
      main: '#32ee90',
      darker: '#006d37',
    },
    gradient: {
      primary: 'linear-gradient(83.6deg, #5D59FF 8.71%, #9076FF 98.37%)',
      blue: 'linear-gradient(83.6deg, #59ff72 8.71%, #76ffaf 98.37%)',
    },
    white: {
      main: '#fff',
    },
  },
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
