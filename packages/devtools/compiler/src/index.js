const path = require('path')

const args = require('./handlers/getCommandLineArgs')()

const packageDir = process.cwd()
const packageJson = require(path.join(packageDir, 'package.json'))

const payload = { packageJson }

// esbuild options
const entryPoint = path.join(packageDir, 'src', `index.${args.jsx ? 'jsx' : 'js'}`)
const outfile = path.join(packageDir, 'build', 'index.js')
const format = args.format || 'esm'

require('esbuild').build({
  entryPoints: [entryPoint],
  outfile,
  platform: args.node ? 'node' : 'browser',
  bundle: true,
  minify: true,
  format,
  target: ['esnext'],
  watch: args.watch,
  external: require('./handlers/getExternals')(payload),
})
