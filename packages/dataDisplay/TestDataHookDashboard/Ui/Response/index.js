import React from 'react'

import Code from '../../../Code'
import Box from '../../../../_ui/src/dataDisplay/Box/src'

export default function Response({ fetch, validation }) {
  let fetchCode = ''
  let validationCode = ''

  if (fetch.error)
    fetchCode =
      fetch.error.toString() === '[object Object]' ? fetch.error : fetch.error.toString()
  if (fetch.result) fetchCode = fetch.result

  if (validation.error)
    validationCode =
      validation.error.toString() === '[object Object]'
        ? validation.error
        : validation.error.toString()

  return (
    !fetch.loading &&
    !fetch.validating && (
      <Box styles={{ gridGap: 's' }}>
        {validationCode && <Code code={validationCode} />}
        {fetchCode && <Code code={fetchCode} stringify language='json' />}
      </Box>
    )
  )
}
