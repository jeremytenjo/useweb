import { storiesOf } from '@storybook/react'

import B from '../../../storybook/variationBlock/index'
import Day from '../day.index'

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

storiesOf('Lib/Dates/Day', module).add('Variations', () => <Variations />)
