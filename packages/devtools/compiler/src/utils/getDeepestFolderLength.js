const path = require('path')

const glob = require('./glob')

/**
 * Get the deepest folder length
 */
module.exports = async function getDeepestFolderLength(dir) {
  const pattern = path.join(dir, '**/')
  const folders = await glob(pattern)
  const total = folders.reduce((accumulator, item) => {
    const foldersString = item.replace(dir, '')
    const folderLength = foldersString.split('/').length - 2

    return folderLength > accumulator ? folderLength : accumulator
  }, 0)

  return total
}
