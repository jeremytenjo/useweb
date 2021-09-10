import { CopyToClipboard as ReactCopyToClipboard } from 'react-copy-to-clipboard'

import Tooltip from '../../dataDisplay/Tooltip'

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
}) {
  const [tooltipText, setTooltipText] = useState()
  const [showTooltip, setShowTooltip] = useState(null)

  const handleCopy = () => {
    setTooltipText('Copied to clipboard!')
    onCopy()
  }

  const onMouseEnter = () => {
    setShowTooltip(true)
    setTooltipText(tooltip)
  }

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => setShowTooltip(false)}
      style={{ cursor: 'pointer' }}
    >
      <Tooltip text={tooltipText} visible={showTooltip}>
        <ReactCopyToClipboard text={text} onCopy={handleCopy}>
          {children}
        </ReactCopyToClipboard>
      </Tooltip>
    </div>
  )
}
