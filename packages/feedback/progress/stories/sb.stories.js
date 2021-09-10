import { storiesOf } from '@storybook/react'

import B from '../../../storybook/variationBlock/index'
import Linear from '../linear'
import Donut from '../Donut'
import Dots from '../dots'

const Variations = () => {
  return (
    <>
      <B title='linear' noBackground>
        <Linear color='secondary' />
      </B>
      <B title='donut' noBackground>
        <Donut color='primary' />
      </B>
      <B title='dots' noBackground>
        <Dots />
      </B>
    </>
  )
}

storiesOf('Lib/Feedback/Progress', module).add('Spinners', () => <Variations />)
