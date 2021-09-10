import React, { useState, createContext, useContext } from 'react'

import getAllGithubFiles from '../../../getAllGithubFiles'
import useGithubFolderViewerProps from '../useGithubFolderViewerProps'

export const UseGithubFolderViewerDataContext = createContext(null)

export const UseGithubFolderViewerDataProvider = ({ children }) => {
  const props = useGithubFolderViewerProps()
  const [storyFiles, setStoryFiles] = useState([])
  const [selectedFile, setSelectedFile] = useState('')
  const [fetchingStories, setFetchingStories] = useState(null)
  const [errorFetching, setErrorFetching] = useState(null)

  const fetchStorySource = async () => {
    setFetchingStories(true)
    setErrorFetching(null)

    try {
      const allFiles = await getAllGithubFiles({
        owner: props.owner,
        repo: props.repo,
        githubFolderUrl: props.githubFolderUrl,
      })

      setSelectedFile(allFiles[2].fileContent)
      setStoryFiles(allFiles)
      props.onFetchedStories(allFiles)
    } catch (error) {
      setErrorFetching(error)
    } finally {
      setFetchingStories(false)
    }
  }

  useEffect(() => {
    fetchStorySource()
  }, [])

  const onFileSelect = (file) => {
    setSelectedFile(file.fileContent)
  }

  return (
    <UseGithubFolderViewerDataContext.Provider
      value={{
        storyFiles,
        selectedFile,
        onFileSelect,
        fetchingStories,
        errorFetching,
      }}
    >
      {children}
    </UseGithubFolderViewerDataContext.Provider>
  )
}

/**
 * @returns {{
 * storyFiles: array
 * selectedFile: string
 * onFileSelect: function
 * fetchingStories: boolean
 * errorFetching: object
 * }} object
 */
const useGithubFolderViewerData = () => useContext(UseGithubFolderViewerDataContext)

export default useGithubFolderViewerData
