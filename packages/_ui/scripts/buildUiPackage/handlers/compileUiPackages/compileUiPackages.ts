import path from 'path'

import shell from '../../../../../node/shell/index.js'

export default function compileUiPackages({ uiPackagesPaths }) {
  uiPackagesPaths.forEach((uiPackage: string) => {
    const uiPackageDir = process.cwd()
    const uiPackagePackageJsonPath = path.join(uiPackageDir, 'package.json')
    const packageName = getPackageName(uiPackage)
    const outputPath = path.join(uiPackageDir, 'build', packageName)
    const packageDir = getPackageDir(uiPackage)

    console.log({
      uiPackageDir,
      uiPackagePackageJsonPath,
      packageName,
      outputPath,
      packageDir,
    })
  })
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
