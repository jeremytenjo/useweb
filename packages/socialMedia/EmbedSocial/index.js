import React from 'react'

import { defaultProps } from './props'
import useData from './useData'
import Ui from './Ui'

export default function EmbedSocial(props) {
  const data = useData(props)
  return <Ui props={props} {...data} />
}

EmbedSocial.defaultProps = defaultProps
