const dargs = require('dargs').default
const concurrently = require('concurrently')

module.exports = async function runCLI(name, args) {
  const argsObj = dargs(args, {
    allowCamelCase: true,
    ignoreFalse: true,
    useEquals: false,
  })
  const argsString = argsObj.join(' ')
  const command = `${name} ${argsString}`

  await concurrently([command])
}
