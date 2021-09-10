import Icon from '../../../../dataDisplay/Icon/library/IconRefreshFilled'
import Text from '../../../../dataDisplay/Text'
import useKeyPress from '../../../../feedback/useKeyPress'

import Styles from './styles'
import { defaultProps } from './props'

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
