import path from 'path'

import chalk from 'chalk'

import getSubPackagesList from './handlers/getSubPackagesList/getSubPackagesList.js'
import compileSubPackages from './handlers/compileSubPackages/compileSubPackages.js'
import createPackageJson from './handlers/createPackageJson/createPackageJson.js'

type BuildSubPackagesProps = {
  rootPackageName: string
  subPackageNameHook?: (props: { packageName: string }) => string
}

export type PayloadProps = {
  buildFolder: string
} & BuildSubPackagesProps

export default async function buildSubPackages({
  rootPackageName,
  subPackageNameHook,
}: BuildSubPackagesProps) {
  const buildFolder = path.join(process.cwd(), 'build')
  const payload: PayloadProps = { buildFolder, rootPackageName, subPackageNameHook }

  console.log(chalk.cyan('Compiling packages...'))
  console.log('')

  // get list of packages based on index.js
  const subPackages = await getSubPackagesList()
  await compileSubPackages({ subPackagesPaths: subPackages, payload })
  // compile each package output in build folder
  // create build index.d.ts with packages types similar to MUI
  console.log('')
  console.log(chalk.cyan('Packages compiled successfully!'))
  console.log('')

  // Create package.json file in build folder
  await createPackageJson({ payload })
}
