import deployHosting from '../../firebase/scripts/deployHosting/deployHosting.js'
import buildApp from '../buildApp/buildApp.js'

export default async function deployApp() {
  await buildApp()
  deployHosting()
}
