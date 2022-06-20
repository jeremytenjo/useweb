import path from 'path'

import glob from '../../../../../../node/glob/glob.js'

export default async function getSubPackagesList() {
  const pattern = path.join(process.cwd(), 'src/**/index.@(tsx|ts)')
  const subPackages = (await glob(pattern)) || []

  return subPackages
}
