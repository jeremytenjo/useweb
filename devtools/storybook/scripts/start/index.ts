import generateStoriesList from './handlers/generateStories/generateStoriesList.js'

export default async function startStorybook() {
  await generateStoriesList()
  // runStorybookCliStart
}
