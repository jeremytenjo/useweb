import React, { memo } from 'react'

import { defaultProps, propTypes } from './props'

const AnimatedComponent = () => {
  return <>adf</>
}

AnimatedComponent.defaultProps = defaultProps
AnimatedComponent.propTypes = propTypes

export default memo(AnimatedComponent)
