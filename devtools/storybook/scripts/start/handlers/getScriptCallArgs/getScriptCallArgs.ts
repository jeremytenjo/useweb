import getCommandLineArgs from '../../../../../../packages/node/getCommandLineArgs/getCommandLineArgs.js'

type Return = 'refresh-stories-list' | 'hello'

export default function getScriptCallArgs(): Return {
  const optionDefinitions = [{ name: 'refresh-stories-list', type: Boolean }]

  const scriptArgs = getCommandLineArgs(optionDefinitions)

  return scriptArgs
}
