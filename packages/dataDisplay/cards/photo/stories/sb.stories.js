import { storiesOf } from '@storybook/react'

import B from '../../../../storybook/variationBlock/index'
import Modal from '../../../../feedback/Modal'
import Photo1 from '../styles/1/photo.index'

const photoUrl =
  'https://images.unsplash.com/photo-1562036861-1194db385400?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
const cardOptions = ['Remove']

const Variations = () => {
  const [modal, setmodal] = useState(null)
  return (
    <>
      <B title='style1' noBackground contentStyle={{ width: 300, height: 600 }}>
        <Photo1 photoUrl={photoUrl} menuOptions={cardOptions} />
      </B>

      <B title='style1 - in modal' noBackground>
        <button onClick={() => setmodal(true)}>OPEN </button>

        <Modal show={modal} onClose={() => setmodal(false)} animationStyle='showHide'>
          <Photo1
            photoUrl={photoUrl}
            menuOptions={cardOptions}
            style={{ width: 300, height: 600 }}
          />
        </Modal>
      </B>
    </>
  )
}

storiesOf('Lib/Data Display/Cards/Photo', module).add('styles', () => <Variations />)
