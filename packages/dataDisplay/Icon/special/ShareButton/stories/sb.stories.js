import { storiesOf } from '@storybook/react'

import B from '../../../../../storybook/variationBlock/index'
import Share from '..'

const ShareComp = () => (
  <B title='share' color='black'>
    <Share />
  </B>
)

storiesOf('Lib/Data Display/Icon/Special', module).add('Share', () => <ShareComp />)
