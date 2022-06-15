import React from 'react'

import ShareExample from './example'

export default {
  name: 'Engagement/DatePicker',
}

const Template = (args) => {
  return (
    <>
      <ShareExample {...args} />
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}
