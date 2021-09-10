import { storiesOf } from '@storybook/react'

import testImage from '../../../../storybook/testImages/test2.jpg'
import testImageBase64 from '../../../../storybook/testImages/testImag-base64'
import testImage2 from '../../../../storybook/testImages/test2.jpg'
import B from '../../../../storybook/variationBlock/index'
import Image from '../index'

const Variations = () => (
  <>
    <B title='default'>
      <Image
        src={testImage}
        styles={{
          borderRadius: '10px',
        }}
        onClick={() => console.log('Clicked')}
      />
    </B>

    <B title='with base64'>
      <Image
        base64={testImageBase64}
        src={testImage}
        onClick={() => console.log('Clicked')}
      />
    </B>

    <B title='isLazyLoaded'>
      <Image
        isLazyLoaded
        styles={{ width: '400px', height: '400px' }}
        src={testImage2}
        onClick={() => console.log('Clicked')}
      />
    </B>
  </>
)

storiesOf('Lib/Media/Image', module).add('variations', () => <Variations />)
