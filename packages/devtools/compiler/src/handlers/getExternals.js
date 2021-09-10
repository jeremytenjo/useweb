const pks = require('../../package.json')

/**
 * Gets externals from package.json peerDependencies
 */
module.exports = function getExternals() {
  if (!pks.peerDependencies) return undefined

  const external = Object.keys(pks.peerDependencies)
  return external
}
