import path from 'path'

import { type PayloadProps } from '../../buildUiPackage'
import shell from '../../../../../node/shell/index.js'

export default async function compileUiPackages({
  uiPackagesPaths,
  payload = {} as PayloadProps,
}) {
  return await Promise.all(
    uiPackagesPaths.map(async (uiPackage: string) => {
      const uiPackageDir = process.cwd()
      const uiPackagePackageJsonPath = path.join(uiPackageDir, 'package.json')
      const packageName = getPackageName(uiPackage)
      const packageDir = getPackageDir(uiPackage)
      const outputPath = path.join(payload.buildFolder, packageName)

      await shell(
        `node ./node_modules/@useweb/compiler/build --packageDir ${packageDir} --outputPath ${outputPath} --packageJsonPath ${uiPackagePackageJsonPath} --dontOutputInBuildFolder`,
      )
    }),
  )
}

const getPackageName = (packagePath) => {
  let packageName = packagePath.split('/')
  packageName = packageName[packageName.length - 3]
  return packageName
}

const getPackageDir = (packagePath) => {
  let packageDir = packagePath.split('/')
  packageDir.splice(packageDir.length - 2, 2)
  packageDir = packageDir.join('/')
  return packageDir
}
