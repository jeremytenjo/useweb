import React from 'react'

import B from '../../../storybook/variationBlock/index'
import Day from '../day.index'

export default {
  title: 'Dates/Day',
}

const Variations = () => (
  <>
    <B title='Default'>
      <Day />
    </B>

    <B title='Status'>
      <Day statuses={['accepted', 'rejected', 'pending']} />
    </B>

    <B title='isCurrentDay'>
      <Day isCurrentDay />
    </B>

    <B title='grey'>
      <Day grey />
    </B>

    <B title='isActive'>
      <Day isActive />
    </B>
  </>
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
