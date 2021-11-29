import path from 'path'

import getScriptCallArgs from './handlers/getScriptCallArgs/getScriptCallArgs.js'
import generateStoriesList from './handlers/generateStoriesList/index.js'
import runStorybookStartCli from './handlers/runStorybookStartCli/index.js'

export type PayloadTypes = {
  storybookPath: string
}

export default async function startStorybook() {
  const storybookPath = path.join(process.cwd(), 'devtools', 'storybook')
  const scriptArgs = getScriptCallArgs()

  console.log(scriptArgs)

  const payload: PayloadTypes = {
    storybookPath,
  }

  scriptArgs.hello && (await generateStoriesList(payload))
  runStorybookStartCli()
}
