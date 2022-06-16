import shell from '../../../packages/node/shell/shell.js'

export default async function deployFirebase() {
  await shell('npm run deploy:firebase-hosting')
}
