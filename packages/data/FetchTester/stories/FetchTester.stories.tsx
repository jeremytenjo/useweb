//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import { FetchTester, type FetchTesterProps } from './component'
import Docs from './FetchTester.docs'

export default {
  title: 'Data/FetchTester',
  args: {},
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
      <FetchTester {...args} />
    </>
  )
}

export const Default = Template.bind({}) as any

const defaultArgs: FetchTesterProps = {
  url: 'http://localhost:3000/api/tiktok-watermark-remover',
  payload: {
    body: {
      tikTokLink: 'https://www.tiktok.com/@1dayspencer/video/7084311189756366086',
    },
  },
}

Default.args = defaultArgs

// export const Variant = Template.bind({}) as any

// const VariantArgs: FetchTesterProps = {
//  ...defaultArgs,
//  name: 'World',
// }

// Variant.args = VariantArgs
