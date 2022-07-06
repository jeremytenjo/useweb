import React from 'react'
import JSONToTSLib from 'json-to-ts'
import { CopyBlock, dracula } from 'react-code-blocks'

/**
 * [Docs](https://github.com/MariusAlch/json-to-ts)
 */
export default function JSONToTS({ json }) {
  const tsArray = JSONToTSLib(json)
  const tsString = tsArray.join('\n\n')

  return <CopyBlock text={tsString} language={'typescript'} theme={dracula} />
}
