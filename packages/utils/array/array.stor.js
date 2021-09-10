import { storiesOf } from '@storybook/react'

import filter from './functions/array.func'

const ArrayofStrings = () => {
  const dataset = ['1', '2', '3']
  const result = filter(dataset)

  return <>Result: {result}</>
}

storiesOf('Lib/utils/Array/Filter', module).add('Array of Strings', () => (
  <ArrayofStrings />
))
