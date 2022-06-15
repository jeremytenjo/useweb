import shell from '../../../../../node/shell/index.js'

export default function compileUiPackages({ uiPackagesPaths }) {
  uiPackagesPaths.forEach((uiPackage) => {
    console.log(uiPackage)
  })
}
