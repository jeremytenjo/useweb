const path = require('path')

const removeFolder = require('../../../../../packages/devtools/compiler/src/utils/removeFolder')

module.exports = async function removeBuildFolder() {
  const buildDir = path.join(process.cwd(), 'build')
  await removeFolder(buildDir)
}
