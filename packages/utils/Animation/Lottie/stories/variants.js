import React from 'react'

import { B, V } from '../../../../storybook/ui'

import LottieLoadingDots from './textLottie.json'

const Variants = ({ Component: Lottie }) => {
  return (
    <>
      <B title='default'>
        <Lottie animationData={LottieLoadingDots} style={{ width: 100, height: 100 }} />
      </B>
    </>
  )
}

export default ({ onlyBase }) =>
  V({
    dir: 'utils/Animation/Lottie',
    // styles: require.context('../styles', true, /index.js$/),
    Variants,
    onlyBase,
  })
