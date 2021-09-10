module.exports = function getOptions() {
  const optionDefinitions = [
    { name: 'watch', alias: 'w', type: Boolean, defaultOption: false },
  ]
  const commandLineArgs = require('command-line-args')
  const options = commandLineArgs(optionDefinitions)

  return options
}
