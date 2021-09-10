import { storiesOf } from '@storybook/react'

import B from '../../../storybook/variationBlock/index'
import Dropdown from '../index'

const Variants = () => {
  return (
    <B title='Default' noBackground>
      <Dropdown />
    </B>
  )
}

// Stories
storiesOf('Lib/Input/Dropdown', module).add('Variants', () => <Variants />)
