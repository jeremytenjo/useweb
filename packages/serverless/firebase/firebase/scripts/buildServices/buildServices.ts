import buildSubPackages from '../../../../../devtools/compilePackages/utils/buildSubPackages/buildSubPackages.js'

export default async function buildServices() {
  await buildSubPackages({
    rootPackageName: '@useweb/firebase',
  })
}
