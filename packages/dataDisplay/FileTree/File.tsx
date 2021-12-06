import CloudDownloadIcon from '@material-ui/icons/CloudDownload'

import Box from '../Box/build/types'
import downloadString from '../../utils/files/browser/downloadString'

export default function File({ file, name, content, onFileSelected = () => null }) {
  return (
    <Box
      styles={{
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
        tabIndex='0'
      >
        {name}
      </div>
      <CloudDownloadIcon onClick={() => downloadString(content, name)} fontSize='small' />
    </Box>
  )
}
