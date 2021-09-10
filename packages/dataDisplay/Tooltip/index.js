import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-away.css'

import { defaultProps } from './props'

/**
 * {@link https://github.com/atomiks/tippyjs-react|Docs}
 * @example
 *  <Tooltip text={'hello'}>
 *    tooltip
 *  </Tooltip>
 */
export default function Tooltip(props) {
  return (
    <Tippy content={props.text} {...props}>
      <div>{props.children}</div>
    </Tippy>
  )
}

Tooltip.defaultProps = defaultProps
