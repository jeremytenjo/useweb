import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import Image from '../../../media/images/Image/src'

import Docs from './docs'
import { Carousel } from './component'
import stubs from './stubs'

const { simple, simple2 } = stubs

export default {
  title: 'packages/Data Display/Carousel',
  component: Carousel,
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: () => <Docs />,
    },
  },
} as Meta

const Template = () => {
  const [index, setIndex] = useState(0)

  return (
    <Carousel index={index} setIndex={setIndex}>
      <Image {...simple} alt='test' />
      <Image {...simple} alt='test' />
      <Image {...simple2} alt='test' />
    </Carousel>
  )
}

export const Example = Template.bind({})
