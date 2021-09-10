import { storiesOf } from '@storybook/react'

import B from '../../../storybook/variationBlock/index'
import IllChat from '../../illustration/chat/style1'
import EmptyPage from '../styles/1/emptyPage.index'

const Variations = () => {
  return (
    <B title='style1' noBackground>
      <EmptyPage image={<IllChat />} />
    </B>
  )
}

storiesOf('Lib/Data Display/Empty Page', module).add('Variations', () => <Variations />)
