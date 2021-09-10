/**
 * Gets externals from package.json peerDependencies
 */
module.exports = function getExternals({ packageJson }) {
  if (!packageJson.peerDependencies) return undefined

  const external = Object.keys(packageJson.peerDependencies)
  return external
}
