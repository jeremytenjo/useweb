import React from 'react'

import { B, V } from '../../../storybook/ui'

const Variants = ({ Component: UseAwait }) => {
  return (
    <>
      <B title='default'>
        <UseAwait />
      </B>
    </>
  )
}

export default ({ onlyBase }) =>
  V({
    dir: 'data/useAsync',
    // styles: require.context('../styles', true, /index.js$/),
    Variants,
    onlyBase,
  })
