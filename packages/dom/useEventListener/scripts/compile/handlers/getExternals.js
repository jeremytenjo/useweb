const pks = require('../../../package.json')

/**
 * Gets externals from package.json peerDependencies
 */
module.exports = function getExternals() {
  const external = Object.keys(pks.peerDependencies)
  return external
}
