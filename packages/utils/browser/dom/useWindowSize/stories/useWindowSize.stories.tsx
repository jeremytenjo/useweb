//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import { useWindowSize } from './component'
import Docs from './useWindowSize.docs'

const defaultArgs = {
  name: 'useWindowSize',
}

export default {
  title: 'utils/browser/dom/useWindowSize',
  args: defaultArgs,
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: Docs,
    },
  },
}

const Template = () => {
  const da = useWindowSize()

  return (
    <>
      {da.width || <p>width: {da.width}px </p>}
      {da.height || <p>height: {da.height}px </p>}
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}

// const variantArgs: UseWindowSizeProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
