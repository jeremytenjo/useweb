import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import CopyButton from '../../input/Button/special/CopyButton'
import Box from '../Box/src'

import * as styles from './styles'

/**
 * {@link https://github.com/react-syntax-highlighter/react-syntax-highlighter#readme|Docs}
 * @example
 *  <Code code='import Hello from "react"' />
 */
export default function Code({
  code,
  language = 'javascript',
  stringify,
  style = atomOneLight,
  tooltipPlacement = 'left',
  ...rest
}) {
  const syntax = stringify ? JSON.stringify(code, null, 1) : code

  return (
    <Box styles={styles.wrapper} className='dataDisplay_Code'>
      <SyntaxHighlighter language={language} style={style} {...rest}>
        {syntax}
      </SyntaxHighlighter>

      <Box styles={styles.icon}>
        <CopyButton text={syntax} tooltipOptions={{ placement: tooltipPlacement }} />
      </Box>
    </Box>
  )
}
