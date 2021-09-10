import { storiesOf } from '@storybook/react'

import B from '../../../storybook/variationBlock/index'
import Autocomplete from '../index'

const Variants = () => {
  return (
    <B title='Default' noBackground>
      <Autocomplete />
    </B>
  )
}

// Stories
storiesOf('Lib/Input/Autocomplete', module).add('Variants', () => <Variants />)
