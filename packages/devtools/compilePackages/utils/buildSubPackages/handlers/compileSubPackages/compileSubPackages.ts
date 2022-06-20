import path from 'path'

import chalk from 'chalk'

import { type PayloadProps } from '../../buildSubPackages'
import shell from '../../../../../../node/shell/shell.js'

export default async function compileSubPackages({
  subPackagesPaths,
  payload = {} as PayloadProps,
}) {
  return await Promise.all(
    subPackagesPaths.map(async (subPackage: string) => {
      const subPackageDir = process.cwd()
      const subPackagePackageJsonPath = path.join(subPackageDir, 'package.json')
      const packageName = getPackageName(subPackage, payload.subPackageNameHook)
      const packageDir = getPackageDir(subPackage)
      const outputPath = path.join(payload.buildFolder, packageName)
      const indexDtsDirPathFallback = path.join(packageName, 'src')

      console.log(`Compiling ${chalk.yellow(`${packageName}`)} ...`)
      console.log('')

      await shell(
        `node ./node_modules/@useweb/compiler/build --packageDir ${packageDir} --outputPath ${outputPath} --packageJsonPath ${subPackagePackageJsonPath} --dontOutputInBuildFolder --typesOutputDir '/' --indexDtsDirPathFallback ${indexDtsDirPathFallback}`,
      )

      console.log('')
      console.log(`${chalk.yellow(`${packageName}`)} compiled successfully!`)
      console.log('')
    }),
  )
}

const getPackageName = (packagePath, subPackageNameHook) => {
  let packageName = packagePath.split('/')
  packageName = packageName[packageName.length - 3]

  if (subPackageNameHook) {
    packageName = subPackageNameHook({ packageName })
  }

  return packageName
}

const getPackageDir = (packagePath) => {
  let packageDir = packagePath.split('/')
  packageDir.splice(packageDir.length - 2, 2)
  packageDir = packageDir.join('/')
  return packageDir
}
