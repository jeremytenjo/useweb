import React from 'react'

import { B, V } from '../../../storybook/ui'
import Text from '../../Text'

const Variants = ({ Component: Accordion }) => {
  return (
    <>
      <B title='default'>
        <Accordion title={<Text text='title this is is' />}>
          <p>this is content</p>
          <p>this is content</p>
          <p>this is content</p>
          <p>this is content</p>
          <p>this is content</p>
        </Accordion>
      </B>
    </>
  )
}

export default ({ onlyBase }) =>
  V({
    dir: 'dataDisplay/Accordion',
    // styles: require.context('../styles', true, /index.js$/),
    Variants,
    onlyBase,
  })
