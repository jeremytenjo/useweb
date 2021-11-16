import { storiesOf } from '@storybook/react'

import B from '../../../../../storybook/variationBlock/index'
import ScrollBackToTop from '..'

const Example = () => {
  return (
    <B title='Default - scroll to see button' style={{ height: '200vh' }}>
      <ScrollBackToTop />
    </B>
  )
}
storiesOf(
  'Lib/Data Display/Icon/Special/Scroll back to top',
  module,
).add('ScrollBackToTop', () => <Example />)
