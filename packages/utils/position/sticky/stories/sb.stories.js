import React from 'react'

import B from '../../../../sb/variationBlock/index'
import Tabs from '../../../../navigation/tabs/styles/1'
import sticky from '../index'

export default {
  name: 'Misc/Position/Utilities/Sticky',
  component: Variations,
}

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

const Template = (args) => {
  return (
    <>
      <Variations {...args} />
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}
