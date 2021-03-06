import React from 'react'

import B from '../../../../sb/variationBlock'
import Share from '..'

export default {
  title: 'Data Display/Icon/Special/Share',
}

const ShareComp = () => (
  <B title='share' color='black'>
    <Share />
  </B>
)

const Template = (args) => {
  return (
    <>
      <ShareComp {...args} />
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}
