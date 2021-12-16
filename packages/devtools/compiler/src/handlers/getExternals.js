/**
 * Gets externals from package.json peerDependencies
 */
module.exports = function getExternals({ packageJson }) {
  if (!packageJson.peerDependencies) return []

  const externals = Object.keys(packageJson.peerDependencies)
  return externals
}
