import React from 'react'

import B from '../../../storybook/variationBlock/index'

import Default from './chat.default.example'

export default {
  title: 'Engagement/Chat',
}

const Variations = () => (
  <B title='Default'>
    <Default />
  </B>
)

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
