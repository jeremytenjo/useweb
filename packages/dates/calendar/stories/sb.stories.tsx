import React from 'react'

import B from '../../../storybook/variationBlock/index'
import stubs from '../stubs'
import Calendar from '..'

export default {
  name: 'Datas/Calendar',
}
const Variations = () => (
  <B title='Default' background>
    <Calendar events={stubs} onDateSelect={(e) => console.log(e)} />
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
