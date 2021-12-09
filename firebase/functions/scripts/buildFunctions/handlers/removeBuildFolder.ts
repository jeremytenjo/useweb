import path from 'path'

import removeFolder from '../../../../../packages/node/removeFolder/src/index.js'

export default async function removeBuildFolder() {
  const buildDir = path.join(process.cwd(), 'build')
  await removeFolder(buildDir)
}
