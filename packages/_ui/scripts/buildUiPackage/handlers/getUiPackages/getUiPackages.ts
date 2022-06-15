import path from 'path'

import glob from '../../../../../node/glob/glob.js'

export default async function getUiPackages() {
  const pattern = path.join(process.cwd(), 'src/**/index.@(tsx|ts)')
  const uiPackages = (await glob(pattern)) || []

  return uiPackages
}
