import shell from '../../../packages/node/shell/index.js'

export default async function deployHosting() {
  await shell('firebase deploy --only hosting')
}
