import buildSubPackages from '../../../../../devtools/compilePackages/utils/buildSubPackages/buildSubPackages.js'

export default async function buildServices() {
  await buildSubPackages({
    rootPackageName: '@useweb/use-firebase',
    subPackageNameHook: ({ packageName }) => {
      let newPackageName = packageName

      if (packageName === 'useFirebase') {
        newPackageName = '/'
      }

      return newPackageName
    },
  })
}
