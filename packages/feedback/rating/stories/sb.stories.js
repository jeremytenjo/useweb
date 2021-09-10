import { storiesOf } from '@storybook/react'

import B from '../../../storybook/variationBlock/index'
import Ratings from '..'

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

storiesOf('Lib/Data Display/Ratings', module).add('Default', () => <Variations />)
