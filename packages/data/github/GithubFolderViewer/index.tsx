import React from 'react'

import Styles from './styles'
import DataProvider from './DataProvider'
import Tree from './containers/Tree'
import FilePreview from './containers/FilePreview'

/**
 * @param {{
 * owner: string
 * repo: string
 * githubFolderUrl: string
 * title: string
 * githubLink: string
 * onDownloadAllFiles: function
 * onFetchedStories: function
 * }} props
 *
 * @example
 * <GithubFolderViewer owner='jeremytenjo' repo='tenjo-apps' githubFolderUrl='lib/src/dataDisplay/Avatar' />
 */
export default function GithubFolderViewer(props) {
  return (
    <DataProvider props={props}>
      <Styles>
        <Tree />
        <FilePreview />
      </Styles>
    </DataProvider>
  )
}

GithubFolderViewer.defaultProps = {
  onDownloadAllFiles: () => null,
  onFetchedStories: () => null,
}
