import React from 'react'
// import { storiesOf } from '@storybook/react'

import Store from '../sm.store'
import One from '../one'
import Two from '../two'

export default {}
const App = () => {
  return (
    <Store>
      <One />
      <br />
      <br />
      <Two />
    </Store>
  )
}

// storiesOf('Lib/utils/State-Management/React', module).add('Context API', () => <App />)
