//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

// import { useNextApi, type UseNextApiProps } from "./component";
import Docs from './useNextApi.docs'

const defaultArgs = {
  name: 'useNextApi',
}

export default {
  title: 'useNextApi',
  args: defaultArgs,
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: Docs,
    },
  },
}

const Template = (args) => {
  return <>Next js api{/* <useNextApi {...args} /> */}</>
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}

// const variantArgs: UseNextApiProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
