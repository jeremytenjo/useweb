import React, { useState } from 'react'
import Image from '@useweb/image'

// import B from '../../../storybook/variationBlock/index'
import Modal from '../../../feedback/Modal/build/types'
import Carousel from '../build/types'

import stubs from './stubs'

const { simple, simple2 } = stubs

export default () => {
  const [showModal, setshowModal] = useState(null)
  const [index, setIndex] = useState(0)

  return (
    <div>
      <div title='default'>
        <Carousel index={index} setIndex={setIndex}>
          <Image {...simple} />
          <Image {...simple} />
          <Image {...simple2} />
        </Carousel>
      </div>

      <div title='in modal'>
        <button onClick={() => setshowModal(!showModal)}>toggle</button>
        <Modal show={showModal} onClose={() => setshowModal(false)}>
          <Carousel index={index} setIndex={setIndex}>
            <Image {...simple} />
            <Image {...simple} />
            <Image {...simple2} />
          </Carousel>
        </Modal>
      </div>
    </div>
  )
}
