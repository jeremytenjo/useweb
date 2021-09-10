import { storiesOf } from '@storybook/react'

import B from '../../../../storybook/variationBlock/index'
import Tabs from '../../../../navigation/tabs/styles/1'
import sticky from '../index'

const DataTabs = [
  { label: 'Photos', link: '/profile/photos' },
  { label: 'Favourites', link: '/profile/favourites' },
  { label: 'Edit Profile', link: '/profile/edit' },
]

const Variations = () => (
  <B title='simple' contentStyle={{ overflow: 'auto', height: 200, width: 'auto' }}>
    <p>text</p>
    <p>text</p>
    <p>text</p>
    <p>text</p>
    <p>text</p>
    <p>text</p>
    <Tabs tabList={DataTabs} color='primary' style={sticky} />
    <p>text</p>
    <p>text</p>
    <p>text</p>
    <p>text</p>
    <p>text</p>
    <p>text</p>
    <p>text</p>
    <p>text</p>
    <p>text</p>
    <p>text</p>
    <p>text</p>
  </B>
)

storiesOf('Lib/utils/Position/Sticky', module).add('variations', () => <Variations />)
