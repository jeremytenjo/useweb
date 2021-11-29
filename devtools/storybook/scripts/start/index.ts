import path from 'path'
import generateStoriesList from './handlers/generateStoriesList/index.js'
import runStorybookStartCli from './handlers/runStorybookStartCli/index.js'

export type PayloadTypes = {
  storybookPath: string
}

export default async function startStorybook() {
  const storybookPath = path.join(process.cwd(), 'devtools', 'storybook')

  const payload: PayloadTypes = {
    storybookPath,
  }

  await generateStoriesList(payload)
  runStorybookStartCli()
}
