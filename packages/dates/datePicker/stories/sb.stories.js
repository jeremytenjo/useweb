import React from 'react'

import B from '../../../sb/variationBlock/index'
import DatePicker from '../index'

export default {
  title: 'Dates/DatePicker',
}

const Variations = () => (
  <>
    <B title='Date Picker - Month' background>
      <DatePicker type='month' />
    </B>
    <B title='Date Picker - Year' background>
      <DatePicker type='year' onSelect={(value) => console.log(value)} />
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
