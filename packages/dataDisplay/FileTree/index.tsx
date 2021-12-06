import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import TreeView from '../TreeView'
import TreeItem from '../TreeView/TreeItem'

import Styles from './styles'
import File from './File'

export default function FileTree({
  files,
  onFileSelected,
  fileContentKeyName = 'fileContent',
}) {
  const renderTree = (nodes) => {
    return (
      <TreeItem
        key={nodes.id}
        nodeId={nodes.id.toString()}
        label={
          nodes[fileContentKeyName] ? (
            <File
              name={nodes.name}
              content={nodes[fileContentKeyName]}
              onFileSelected={onFileSelected}
              file={nodes}
            />
          ) : (
            nodes.name
          )
        }
      >
        {Array.isArray(nodes.files)
          ? nodes.files.map((node) => {
              return renderTree(node)
            })
          : null}
      </TreeItem>
    )
  }

  return (
    <Styles data-name='FileTree'>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={['root']}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {renderTree(files)}
      </TreeView>
    </Styles>
  )
}
