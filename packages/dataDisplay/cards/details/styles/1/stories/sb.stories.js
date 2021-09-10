import { storiesOf } from '@storybook/react'

import B from '../../../../../../storybook/variationBlock/index'
import Details from '../details.index'

const name = 'Hayle Whitehead'
const photoUrl =
  'https://s.yimg.com/ny/api/res/1.2/RlohyTwlNFUUVy_la7dKkw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/teen_vogue_128/ad2029a8bd7ea7eac4d17f8ca63e7a4d'

const Variations = () => {
  return (
    <B title='style1' noBackground>
      <Details name={name} rating={5} location='Vancouver, BC' photoUrl={photoUrl} />
    </B>
  )
}

storiesOf('Lib/Data Display/Cards/Details', module).add('Styles', () => <Variations />)
