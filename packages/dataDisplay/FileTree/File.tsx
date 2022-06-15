import React from 'react'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'

import Box from '../../_ui/src/dataDisplay/Box/src'
import downloadString from '../../utils/files/browser/downloadString'

export default function File({ file, name, content, onFileSelected = (d) => d }) {
  return (
    <Box
      sx={{
        gridAutoFlow: 'column',
        gridGap: 'm',
        alignItems: 'center',
        width: '100%',
      }}
      title={name}
    >
      <div
        role='button'
        style={{ cursor: 'pointer' }}
        onClick={() => onFileSelected(file)}
        onKeyPress={(e) => e.key === 'Enter' && onFileSelected(file)}
        tabIndex={0}
      >
        {name}
      </div>
      <CloudDownloadIcon onClick={() => downloadString(content, name)} fontSize='small' />
    </Box>
  )
}
