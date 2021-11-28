import path from 'path'
import generateStoriesList from './handlers/generateStories/generateStoriesList.js'

export type PayloadTypes = {
  storybookPath: string
}

export default async function startStorybook() {
  const storybookPath = path.join(process.cwd(), 'devtools', 'storybook')
  console.log(storybookPath)
  const payload: PayloadTypes = {
    storybookPath,
  }
  await generateStoriesList(payload)
  // runStorybookCliStart
}
