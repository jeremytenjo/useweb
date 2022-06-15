import React from 'react'

import B from '../../../../storybook/variationBlock'
import Share from '..'

export default {
  name: 'Data Display/Icon/Special/Share',
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
