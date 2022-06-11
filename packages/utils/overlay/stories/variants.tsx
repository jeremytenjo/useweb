import React, { useState } from 'react'

import B from '../../../storybook/variationBlock/index'
import Button from '../../../input/Button/build'
import Overlay from '../src/index'

export default () => {
  const [show, setshow] = useState<any>(null)
  return (
    <B title='default' noBackground>
      <Button
        onClick={() => setshow(true)}
        text='show overlay'
        color='secondary'
        dataCy='show-button'
      />
      <Overlay show={show} onClick={() => setshow(false)} dataCy='overlay' />

      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
      <p>adsf</p>
    </B>
  )
}
