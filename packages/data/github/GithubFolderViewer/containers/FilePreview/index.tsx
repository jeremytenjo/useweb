import React from 'react'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import Code from '../../../../../dataDisplay/Code'
import useGithubFolderViewerData from '../../DataProvider/useGithubFolderViewerData'

import Styles from './styles'

export default function FilePreview() {
  const data = useGithubFolderViewerData()

  return (
    <Styles>
      <Code code={data.selectedFile} style={atomOneDark} />
    </Styles>
  )
}
