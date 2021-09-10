import { storiesOf } from '@storybook/react'

import B from '../../../storybook/variationBlock/index'
import Chip from '../../../dataDisplay/chip'
import Collection from '../index'

const Variations = () => {
  return (
    <>
      <B title='default' noBackground>
        <Collection ItemComponent={Chip} itemComponentTextKey='text' placeholder='add' />
      </B>

      <B title='not editable' noBackground>
        <Collection
          ItemComponent={Chip}
          itemComponentTextKey='text'
          placeholder='add'
          editable={false}
          initialData={[1, 2, 3]}
        />
      </B>

      <B title='remove on onItemClick' noBackground>
        <Collection
          ItemComponent={Chip}
          itemComponentTextKey='text'
          onItemClick={() => console.log('function to remove elem,ent')}
          onItemAdded={() => console.log('function to add to databse etc')}
          placeholder='add'
          initialData={[{ text: 'a1' }, { text: 'b' }, { text: 'c' }]}
          removeItemOnClick
        />
      </B>
    </>
  )
}

storiesOf('Lib/Input/Collection', module).add('default', () => <Variations />)
