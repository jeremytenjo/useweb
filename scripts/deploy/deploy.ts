import shell from '../../packages/node/shell/index.js'
;(async function devScript() {
  await shell('npm run build:storybook && firebase deploy --only hosting')
})()
