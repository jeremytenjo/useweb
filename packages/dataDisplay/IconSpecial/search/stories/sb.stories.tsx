// import { storiesOf } from '@storybook/react'

import SearchIcon from '../index'

export default {}
const Variations = () => (
  <div
    style={{
      backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '50px',
    }}
  >
    <SearchIcon
      mainIcon='search/feather'
      closeIcon='close/feather'
      onSubmit={(value) => console.log(value)}
    />
  </div>
)

// storiesOf('Lib/Data Display/Icon/Special', module).add('Search', () => <Variations />)
