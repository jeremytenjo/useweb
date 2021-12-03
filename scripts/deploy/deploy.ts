import deployHosting from '../../firebase/scripts/deployHosting/deployHosting.js'
import buildApp from '../buildApp/buildApp.js'
;(async function devScript() {
  await buildApp()
  deployHosting()
})()
