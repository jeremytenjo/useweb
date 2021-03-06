import buildSubPackages from '../../../devtools/compilePackages/utils/buildSubPackages/buildSubPackages.js'

export default async function buildUiPackage() {
  await buildSubPackages({
    rootPackageName: '@useweb/ui',
    subPackageNameHook: ({ packageName }) => {
      let newPackageName = packageName

      if (packageName === 'useFirebase') {
        newPackageName = '/'
      }

      return newPackageName
    },
  })
}
