import React from 'react'

import IconBellFeather from '../library/IconBellFeather/index'
import IconCameraFeatherStroke from '../library/IconCameraFeather/index'
import { B } from '../../../storybook/ui'

export default {
  title: 'Data Display/Icon',
  component: IconBellFeather,
}

export const Variations = () => (
  <>
    <B title='Default'>
      <IconBellFeather />
    </B>

    <B title='plain'>
      <IconBellFeather plain />
    </B>

    <B title='size'>
      <IconBellFeather size='90px' />
    </B>
    <B title='size - where width and height are different'>
      <IconBellFeather width='auto' height='20px' />
    </B>

    <B title='color'>
      <IconBellFeather color='secondary' />
    </B>

    <B title='backgroundColor'>
      <IconBellFeather color='white' backgroundColor='primary' backgroundSize='20px' />
    </B>

    <B title='outlined'>
      <IconBellFeather color='primary' outlined background />
    </B>

    <B title='label'>
      <IconBellFeather label={{ text: 'label' }} />
    </B>
    <B title='isStroke'>
      <IconCameraFeatherStroke color='primary' />
    </B>
    <B title='with children'>
      <IconBellFeather color='primary'>Hello from children</IconBellFeather>
    </B>
    <B title='backgroundSize'>
      <IconBellFeather color='primary' backgroundSize='40px' />
    </B>
    <B title='file upload'>
      <IconBellFeather
        inputProps={{
          name: 'file_upload',
          onInput: (file) => console.log(file),
        }}
        size='60px'
      />
    </B>
  </>
)
