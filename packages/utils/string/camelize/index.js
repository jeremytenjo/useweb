/**
 * Camelizes a string with/without a custom separator (underscore by default).
 *
 * @param str String in camelcase
 * @param separator Separator for the new decamelized string.
 */

module.exports = (str, separator = '-') => {
  if (!str) console.error(str, `str is ${str} , add string as first parameter`)
  const regex = new RegExp(separator, 'g')

  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function rep(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase()
    })
    .replace(/\s+/g, '')
    .replace(regex, '')
}

exports.testValue = 'margin-right'
