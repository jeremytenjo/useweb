import path from 'path'

import shell from '../../../../packages/node/shell/shell.js'
import removeFolder from '../../../../packages/devtools/compiler/src/utils/removeFolder.js'

export default async function buildStorybook() {
  const buildDirRoot = 'devtools/storybook/build'
  const buildDir = path.join(process.cwd(), buildDirRoot)

  await removeFolder(buildDir)
  await shell(`build-storybook -o ./${buildDirRoot} -c ./devtools/storybook`)
}
