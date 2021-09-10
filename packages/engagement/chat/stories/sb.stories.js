import { storiesOf } from '@storybook/react'

import B from '../../../storybook/variationBlock/index'

import markdown from './README.md'
import Default from './chat.default.example'

const Variations = () => (
  <B title='Default'>
    <Default />
  </B>
)

storiesOf('Lib/Engagement/Chat', module).add('default', () => <Variations />, {
  notes: { markdown },
})
