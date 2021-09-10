const chalk = require('chalk')

module.exports = (text, color = 'cyan') => chalk[color](text)
