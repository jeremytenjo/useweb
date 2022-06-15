import React from 'react'

import B from '../../../storybook/variationBlock/index'
import Ratings from '..'

export default {
  title: 'Feedback/Rating',
}

const Variations = () => {
  return (
    <>
      <B title='default'>
        <Ratings />
      </B>

      <B title='set'>
        <Ratings rating={4} />
      </B>

      <B title='non editable'>
        <Ratings rating={4} edit={null} />
      </B>
    </>
  )
}

const Template = (args) => {
  return (
    <>
      <Variations {...args} />
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}
