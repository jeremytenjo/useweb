const lodash = require('lodash')

/**
 * @example
 * deepMerge(defaultConfigOptions, config)
 */
module.exports = (defaultValues, newValues) => lodash.merge(defaultValues, newValues)
