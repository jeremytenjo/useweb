import React from 'react'

import StatusBadge from '../../../StatusBadge'
import RefreshButton from '../../../../input/RefreshButton'
import Box from '../../../Box'

import * as styles from './styles'

export default function TopBar({ fetch, validation, props }) {
  const fetchingstate =
    !fetch.loading && !fetch.error && !fetch.result
      ? 'disabled'
      : fetch.loading
      ? 'loading'
      : fetch.error
      ? 'error'
      : fetch.result
      ? 'success'
      : 'loading'

  const valiadtingstate = fetch.loading
    ? 'disabled'
    : validation.validating
    ? 'loading'
    : validation.error
    ? 'error'
    : validation.result
    ? 'success'
    : 'disabled'

  const handleRefresh = () => {
    fetch.exec(props.dataHookExecData)
  }

  return (
    <Box styles={styles.wrapper}>
      <Box styles={styles.badges}>
        <StatusBadge state={fetchingstate} text='Fetching' disabledText='Idle' />
        {validation.validateFetchResult && (
          <StatusBadge
            state={valiadtingstate}
            text='Validating'
            disabledText='Waiting for fetch to finish before validating'
            successText='Valid'
            errorText='Invalid'
          />
        )}
      </Box>

      <RefreshButton onRefresh={handleRefresh} />
    </Box>
  )
}
