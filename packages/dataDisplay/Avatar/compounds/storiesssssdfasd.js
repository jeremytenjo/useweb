import { storiesOf } from '@storybook/react'

import StylistsInfo from './StylistsInfo/stylistsInfo.index'

const name = 'Hayle Whitehead Hello'
const rating = 5
const photoUrl =
  'https://firebasestorage.googleapis.com/v0/b/estilistta.appspot.com/o/hayle.jpeg?alt=media&token=b8eb9208-6456-4075-9f57-c2c680745604'

storiesOf('Lib/Data-Display/Avatar/Compounds', module).add('StylistsInfo', () => (
  <StylistsInfo name={name} rating={rating} photoUrl={photoUrl} />
))
