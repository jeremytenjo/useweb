import path from 'path'

import parseEnvFile from '../../../../nodeUtils/parseEnvFile'
import deepMerge from '../../../../../packages/utils/object/deepMerge'

export default function webpackDotEnv(defaultEnvs) {
  if (!defaultEnvs.definitions['process.env']) {
    return defaultEnvs
  }
  const DefinePlugin = defaultEnvs
  const envFilePath = path.join(process.cwd(), '.env')
  const localEnvDefinitions = parseEnvFile({ envFilePath }) || {}
  const processEnvDefinitions = deepMerge(
    defaultEnvs.definitions['process.env'],
    localEnvDefinitions,
  )

  DefinePlugin.definitions['process.env'] = processEnvDefinitions

  return DefinePlugin
}
