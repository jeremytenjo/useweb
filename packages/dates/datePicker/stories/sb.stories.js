// import { storiesOf } from '@storybook/react'

import React from 'react'

import B from '../../../storybook/variationBlock/index'
import DatePicker from '../index'

export default {}
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

// storiesOf('Lib/Dates/Date Picker', module).add('variations', () => <Variations />)
