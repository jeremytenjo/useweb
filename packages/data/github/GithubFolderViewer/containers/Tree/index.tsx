import FileTree from '../../../../../dataDisplay/FileTree'
import Donut from '../../../../../feedback/progress/Donut'
import useGithubFolderViewerProps from '../../DataProvider/useGithubFolderViewerProps'
import useGithubFolderViewerData from '../../DataProvider/useGithubFolderViewerData'

import Options from './Options'
import Styles from './styles'

export default function Tree() {
  const props = useGithubFolderViewerProps()
  const data = useGithubFolderViewerData()
  let filtered = data.storyFiles.sort((a, b) => (a.name < b.name ? -1 : 1))
  filtered = filtered.sort((file) => (file.type === 'directory' ? -1 : 0))

  const onFileSelected = (selectedFile) => {
    data.onFileSelect(selectedFile)
  }

  // TODO add icon to hide and show tree

  return (
    <Styles>
      {data.errorFetching && <p style={{ color: 'red' }}>Error Fetching Github Data</p>}

      {data.fetchingStories && <Donut />}

      {!data.errorFetching && !data.fetchingStories && (
        <>
          <Options />
          <FileTree
            onFileSelected={onFileSelected}
            files={{
              id: 'root',
              name: props.title,
              files: filtered,
            }}
          />
        </>
      )}
    </Styles>
  )
}
