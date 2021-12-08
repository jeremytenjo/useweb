import { useState } from 'react'
import { CopyToClipboard as ReactCopyToClipboard } from 'react-copy-to-clipboard'

import Tooltip from '../../dataDisplay/Tooltip'

type Props = {
  children?: any
  text?: string
  onCopy?: (text: string) => string
  tooltip?: any
  style?: object
}

/**
 * {@link https://github.com/nkbt/react-copy-to-clipboard#usage|Docs}
 * @example
 *  <CopyToClipboard text={props.text} onCopy={onCopy}>
        Copy this text
      </CopyToClipboard>
 */
export default function CopyToClipboard({
  children,
  text,
  onCopy = () => null,
  tooltip = 'Copy to clipboard',
  style = {},
}: Props) {
  const [tooltipText, setTooltipText] = useState(null)
  const [showTooltip, setShowTooltip] = useState(null)

  const handleCopy = (text) => {
    setTooltipText('Copied to clipboard!')
    onCopy(text)
  }

  const onMouseEnter = () => {
    setShowTooltip(true)
    setTooltipText(tooltip)
  }

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => setShowTooltip(false)}
      style={{ cursor: 'pointer', ...style }}
    >
      <Tooltip text={tooltipText} visible={showTooltip}>
        <ReactCopyToClipboard text={text} onCopy={handleCopy}>
          {children}
        </ReactCopyToClipboard>
      </Tooltip>
    </div>
  )
}
