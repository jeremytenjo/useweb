import shell from '../../../../../node/shell/index.js'

export default function compileUiPackages({ uiPackagesPaths }) {
  uiPackagesPaths.forEach((uiPackage: string) => {
    const entryPoint = uiPackage
    const packageDir = process.cwd()

    console.log({ entryPoint, packageDir })
  })
}
