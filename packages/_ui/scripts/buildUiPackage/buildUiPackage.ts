import chalk from 'chalk'

import getUiPackages from './handlers/getUiPackages/getUiPackages.js'
import compileUiPackages from './handlers/compileUiPackages/compileUiPackages.js'

export default async function buildUiPackage() {
  console.log(chalk.cyan('Compiling packages...'))
  console.log('')

  // get list of packages based on index.js
  const uiPackages = await getUiPackages()
  await compileUiPackages({ uiPackagesPaths: uiPackages })
  // compile each package output in build folder
  // create build index.d.ts with packages types similar to MUI
  console.log('')
  console.log(chalk.cyan('Packages compiled successfully!'))
  console.log('')

  // Create package.json file in build folder
}
