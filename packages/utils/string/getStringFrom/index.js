/**
 * @param  {} stringSource
 * @example
 * getStringFrom('lib/src/engagement', 'src/')
 * will return 'engagement'
 */
module.exports = function getStringFrom(stringSource, from) {
  const index = stringSource.indexOf(from) + from.length
  const length = stringSource.length
  const stringFrom = stringSource.slice(index, length)

  return stringFrom
}
