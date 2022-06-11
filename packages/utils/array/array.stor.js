// import { storiesOf } from '@storybook/react'
import React from 'react'

import filter from './functions/array.func'

const ArrayofStrings = () => {
  const dataset = ['1', '2', '3']
  const result = filter(dataset)

  return <>Result: {result}</>
}

export default {
  name: 'Array/Utilities/Filter',
  component: ArrayofStrings,
}
