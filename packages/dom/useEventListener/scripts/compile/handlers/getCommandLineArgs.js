/**
 * Get script options eg --watch
 * {@link https://github.com/75lb/command-line-args#readme|Docs}
 */
module.exports = function getCommandLineArgs() {
  const optionDefinitions = [
    { name: 'watch', alias: 'w', type: Boolean },
    { name: 'jsx', type: Boolean },
  ]
  const commandLineArgs = require('command-line-args')
  const options = commandLineArgs(optionDefinitions)

  return options
}
