import React from 'react'

import filter from './functions/array.func'

export default {
  name: 'Array/Utilities/Filter',
}

const ArrayofStrings = () => {
  const dataset = ['1', '2', '3']
  const result = filter(dataset)

  return <>Result: {result}</>
}

const Template = (args) => {
  return (
    <>
      <ArrayofStrings {...args} />
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}
