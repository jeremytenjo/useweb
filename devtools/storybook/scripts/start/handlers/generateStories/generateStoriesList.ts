import path from 'path'

import glob from '../../../../../../packages/node/glob/index.js'

export default async function generateStoriesList() {
  //get list
  console.log(process.cwd())
  const stories = await glob(`${process.cwd()}/packages/**/*.stories.@(tsx|mdx)`, {
    ignore: 'node_modules',
  })
  console.log(stories)
}
