import path from 'path'

import getScriptCallArgs from './handlers/getScriptCallArgs/getScriptCallArgs.js'
import generateStoriesList from './handlers/generateStoriesList/generateStoriesList.js'
import runStorybookStartCli from './handlers/runStorybookStartCli/runStorybookStartCli.js'

export type PayloadTypes = {
  storybookPath: string
}

export default async function startStorybook() {
  const storybookPath = path.join(process.cwd(), 'devtools', 'storybook')
  const scriptArgs = getScriptCallArgs()

  const payload: PayloadTypes = {
    storybookPath,
  }

  scriptArgs['refresh-stories-list'] && (await generateStoriesList(payload))

  runStorybookStartCli({ noManagerCache: scriptArgs['refresh-stories-list'] })
}
