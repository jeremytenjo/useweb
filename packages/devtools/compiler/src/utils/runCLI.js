const dargs = require('dargs').default
const concurrently = require('concurrently')

module.exports = async function runCLI(name, args) {
  const argsObj = dargs(args, { allowCamelCase: true })
  const argsString = argsObj.join(' ')
  console.log(argsString)
  const command = `${name} ${argsString}`

  await concurrently([command])
}
