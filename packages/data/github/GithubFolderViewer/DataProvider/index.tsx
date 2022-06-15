import React from 'react'

import { UseGithubFolderViewerDataProvider } from './useGithubFolderViewerData'
import { UseGithubFolderViewerPropsProvider } from './useGithubFolderViewerProps'

export default function GithubFolderViewerDataProvider({ children, props }) {
  return (
    <UseGithubFolderViewerPropsProvider props={props}>
      <UseGithubFolderViewerDataProvider>{children}</UseGithubFolderViewerDataProvider>
    </UseGithubFolderViewerPropsProvider>
  )
}
