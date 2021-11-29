import typographyResets from '../typography/resets'
import colorVars from '../colors/vars'
import body from '../browser/body'
import typography from '../typography/index.css'
import spacing from '../spacing'
import transitions from '../transitions'

export default `
<style type="text/css">
${typographyResets}
${typography}
${body}
${colorVars}
${spacing}
${transitions}
</style>
`
