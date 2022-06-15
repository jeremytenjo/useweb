import React from 'react'

import Box from '../../../../../../_ui/src/dataDisplay/Box/src'
import Button from '../../../../../../_ui/src/input/Button/src'
// import IconGithub from '../../../../../../dataDisplay/Icon/library/IconGithub1'
import useGithubFolderViewerProps from '../../../DataProvider/useGithubFolderViewerProps'

export default function Options() {
  const props = useGithubFolderViewerProps()

  return (
    <Box
      sx={{
        gridAutoFlow: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 'xs',
      }}
    >
      <Button text='Download' onClick={props.onDownloadAllFiles} size='small' />
      {props.githubLink && (
        <a
          href={props.githubLink}
          target='_blank'
          rel='noreferrer'
          title='Open in github'
        >
          Options Github yeh
        </a>
      )}
    </Box>
  )
}
