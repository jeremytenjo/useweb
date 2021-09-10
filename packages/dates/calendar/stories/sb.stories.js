import { storiesOf } from '@storybook/react'

import B from '../../../storybook/variationBlock/index'
import stubs from '../stubs'
import Calendar from '../'

const Variations = () => (
  <B title='Default' background>
    <Calendar events={stubs} onDateSelect={(e) => console.log(e)} />
  </B>
)

storiesOf('Lib/Dates/Calendar', module).add('Variations', () => <Variations />)
