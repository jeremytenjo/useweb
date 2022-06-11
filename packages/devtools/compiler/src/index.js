// eslint-disable-next-line no-extra-semi
(async () => {
  const path = require('path')
  const esbuild = require('esbuild')

  const args = require('./handlers/getCommandLineArgs')()
  const getEntryPoint = require('./handlers/getEntryPoint')
  const generateTypes = require('./handlers/generateTypes')
  const removeBuildFolder = require('./handlers/removeBuildFolder')

  const packageDir = process.cwd()
  const packageJson = require(path.join(packageDir, 'package.json'))

  const payload = { packageJson }
  const { entryPoint, entryPointFile } = await getEntryPoint(packageDir)
  const outfile = path.join(packageDir, 'build', 'index.js')
  const format = args.format || 'cjs'
  const target = args.target || 'es2019'

  await removeBuildFolder()
  await generateTypes(packageDir, entryPointFile)

  // https://esbuild.github.io/api/
  esbuild.build({
    entryPoints: [entryPoint],
    outfile,
    platform: args.node ? 'node' : 'browser',
    bundle: true,
    minify: true,
    format,
    target: [target],
    watch: args.watch,
    external: require('./handlers/getExternals')(payload),
  })
})()
