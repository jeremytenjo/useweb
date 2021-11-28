import React, { useState } from 'react'

import B from '../../../storybook/variationBlock/index'
import Image from '../../../media/images/Image/build/types'
import Modal from '../../../feedback/Modal/build/types'
import Carousel from '../build/types'

import stubs from './stubs'

const { simple, simple2 } = stubs

export default () => {
  const [showModal, setshowModal] = useState(null)
  const [index, setIndex] = useState(0)

  return (
    <div>
      <B title='default'>
        <Carousel index={index} setIndex={setIndex}>
          <Image {...simple} alt='test' />
          <Image {...simple} alt='test' />
          <Image {...simple2} alt='test' />
        </Carousel>
      </B>

      <B title='in modal'>
        <button onClick={() => setshowModal(!showModal)}>toggle</button>
        <Modal show={showModal} onClose={() => setshowModal(false)}>
          <Carousel index={index} setIndex={setIndex}>
            <Image {...simple} alt='test' />
            <Image {...simple} alt='test' />
            <Image {...simple2} alt='test' />
          </Carousel>
        </Modal>
      </B>
    </div>
  )
}
