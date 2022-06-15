import path from 'path'

import glob from '../../../../../../packages/node/glob/index.js'
import createFile from '../../../../../../packages/node/createFile/createFile.js'
import { PayloadTypes } from '../../startStorybook'

export default async function generateStoriesList(payload: PayloadTypes) {
  const storiesWithFullPaths = await glob(
    `${process.cwd()}/packages/**/stories/*stories.@(tsx|ts)`,
    {
      ignore: '**/node_modules/**',
    },
  )
  const stories = storiesWithFullPaths.map((storyFullPath) => {
    return storyFullPath.replace(process.cwd(), '../..')
  })

  const storiesListPath = path.join(payload.storybookPath, 'storiesList.cjs')
  const storiesListContent = `module.exports = ${JSON.stringify(stories)}`

  await createFile(storiesListPath, storiesListContent)
}
