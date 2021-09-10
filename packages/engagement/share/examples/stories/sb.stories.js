import { storiesOf } from '@storybook/react'

import markdown from '../../README.md'

import ShareExample from './example'

storiesOf('Lib/Engagement/share', module).add('default', () => <ShareExample />, {
  notes: { markdown },
})
