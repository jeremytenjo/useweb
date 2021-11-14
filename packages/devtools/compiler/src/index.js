// eslint-disable-next-line no-extra-semi
;(async () => {
  const path = require('path')
  const esbuild = require('esbuild')

  const args = require('./handlers/getCommandLineArgs')()
  const getEntryPoint = require('./handlers/getEntryPoint')

  const packageDir = process.cwd()
  const packageJson = require(path.join(packageDir, 'package.json'))

  const payload = { packageJson }

  // esbuild options
  const entryPoint = await getEntryPoint(packageDir)
  const outfile = path.join(packageDir, 'build', 'index.js')
  const format = args.format || 'cjs'

  esbuild.build({
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
})()
