import React from 'react'

import Icon from '../../dataDisplay/Icon/library/IconRefreshFilled'
import Text from '../../_ui/src/dataDisplay/Text/src'
import useKeyPress from '../../feedback/useKeyPress/src'

import Styles from './styles'

const defaultProps = {
  text: 'Refresh',
  onRefresh: () => null,
  keys: 'shift r',
}

export default function RefreshButton(props) {
  useKeyPress(props.keys, props.onRefresh)

  return (
    <Styles onClick={props.onRefresh} title='shortcut (shift + r)'>
      <Icon color='black' plain size='20px' />
      <Text text={props.text} className='text' />
    </Styles>
  )
}

RefreshButton.defaultProps = defaultProps
