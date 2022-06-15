import getUiPackages from './handlers/getUiPackages/getUiPackages.js'
import compileUiPackages from './handlers/compileUiPackages/compileUiPackages.js'

export default async function buildUiPackage() {
  // get list of packages based on index.js
  const uiPackages = await getUiPackages()
  await compileUiPackages({ uiPackagesPaths: uiPackages })
  // compile each package output in build folder
  // create build index.d.ts with packages types similar to MUI
}
