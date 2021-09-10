import sortArray from '../index'
import B from '../../../../../storybook/variationBlock/index'

import mockData from './mockData'

export default () => {
  const listStyle = { display: 'grid' }
  const sortedData = sortArray(mockData, {
    order: 'ascending',
    type: 'number',
    keyToCompare: 'release_date',
  })

  return (
    <div style={{ color: 'white', display: 'grid', gridAutoFlow: 'column' }}>
      <B title='original' style={listStyle}>
        {mockData.map((item, index) => (
          <span key={index}>{item.release_date}</span>
        ))}
      </B>
      <B title='sorted' style={listStyle}>
        {sortedData.map((item, index) => (
          <span key={index}>{item.release_date}</span>
        ))}
      </B>
    </div>
  )
}
