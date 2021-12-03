import shell from '../../../../packages/node/shell/index.js'

export default async function buildStorybook() {
  await shell('build-storybook -o ./devtools/storybook/build -c ./devtools/storybook')
}
