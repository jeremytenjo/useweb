import CopyToClipboard from '../../../CopyToClipboard'

import { defaultProps } from './props'

/**
 * @param {{
 * text: string
 * children: function
 * onCopy: function
 * title: string
 * }} props
 *
 * @example
 * <CopyButton text='hello' />
 */
export default function CopyButton(props) {
  const onCopy = () => {
    props.onCopy()
  }

  return (
    <CopyToClipboard text={props.text} onCopy={onCopy}>
      {props.children || <props.Icon color='darkgrey' plain />}
    </CopyToClipboard>
  )
}

CopyButton.defaultProps = defaultProps
