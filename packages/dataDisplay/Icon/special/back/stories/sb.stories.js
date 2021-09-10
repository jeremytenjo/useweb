import { storiesOf } from '@storybook/react'

import B from '../../../../../storybook/variationBlock/index'
import Back from '..'

const BackComp = () => (
  <B title='back' color='black'>
    <Back />
  </B>
)

storiesOf('Lib/Data Display/Icon/Special', module).add('Back', () => <BackComp />)
