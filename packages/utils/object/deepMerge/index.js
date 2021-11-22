const lodash = require('lodash')

/**
 * @example
 * deepMerge(defaultConfigOptions, config)
 */
export default function deepMerge(defaultValues, newValues) {
  return lodash.merge(defaultValues, newValues)
}
