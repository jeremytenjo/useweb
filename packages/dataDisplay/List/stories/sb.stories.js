import Image from '../../../media/images/Image'
import B from '../../../storybook/variationBlock/index'
import List from '../index'

// Test Data
const dataSet1 = ['block', 'block', 'block', 'block']
const dataSet2 = ['block', 'block', 'block', 'block', 'block', 'block', 'block']
const src =
  'https://images.unsplash.com/photo-1552089123-2d26226fc2b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80'
const dataSetimages = [
  {
    src,
  },
  {
    src,
  },
  {
    src,
  },
  {
    src,
  },
  {
    src,
  },
  {
    src,
  },
  {
    src,
  },
]

const itemComponent = ({ item }) => <p>{item}</p>

const Variations = () => (
  <>
    <B title='Direction - Vertical' background>
      <List data={dataSet1} ItemComponent={itemComponent} direction='row' />
    </B>

    <B title='Direction - Horizontal' background>
      <List data={dataSet2} ItemComponent={itemComponent} direction='column' />
    </B>

    <B
      title='Direction - Horizontal - Overflow'
      background
      contentStyle={{ width: '50%', padding: 0 }}
    >
      <List data={dataSet2} ItemComponent={itemComponent} direction='column' overflows />
    </B>

    <B title='with Children' background>
      <List direction='column'>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
      </List>
    </B>

    <B title='Grid' background>
      <List
        data={dataSet2}
        ItemComponent={itemComponent}
        grid
        repeat={3}
        repeatOnMinWidth={4}
        minWidth={800}
      />
    </B>

    <B title='photoGrid' style={{ width: '100%' }} background>
      <List
        data={dataSetimages}
        ItemComponent={Image}
        photoGrid
        repeat={3}
        repeatOnMinWidth={4}
        minWidth={800}
        onItemClick={(e) => console.log(e)}
      />
    </B>

    <B title='onScrollEnd' style={{ width: '100%' }} background>
      <List
        data={dataSetimages}
        ItemComponent={Image}
        photoGrid
        repeat={3}
        repeatOnMinWidth={4}
        minWidth={800}
        onItemClick={(e) => console.log(e)}
        direction='row'
        gap='xl'
        style={{ height: 100, overflow: 'scroll' }}
        onScrollEnd={() => console.log('Reached Bottom')}
      />
    </B>
  </>
)

export default {
  title: 'Lib/Data Display/List',
}

export const variations = () => <Variations />
