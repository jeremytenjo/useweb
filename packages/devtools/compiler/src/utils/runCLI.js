//https://github.com/sindresorhus/dargs
const concurrently = require('concurrently')

const objectToCliArgs = require('./objectToCliArgs')

module.exports = async function runCLI(name, args) {
  const argsObj = objectToCliArgs(args, {
    allowCamelCase: true,
    ignoreFalse: true,
    useEquals: false,
  })
  const argsString = argsObj.join(' ')
  const command = `${name} ${argsString}`

  await concurrently([command])
}
