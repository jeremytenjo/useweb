import commandLineArgs from 'command-line-args'

/**
 * Get script options eg --watch
 * {@link https://github.com/75lb/command-line-args#readme|Docs}
 */

type ArgOptions = {
  name: string
  type: any
}
export default function getCommandLineArgs(argOptions: ArgOptions[]) {
  const optionDefinitions = [{ name: 'refresh-stories-list', type: Boolean }]
  const options = commandLineArgs(argOptions)

  return options
}
