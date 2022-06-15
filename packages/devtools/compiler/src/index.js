// eslint-disable-next-line no-extra-semi
(async () => {
  const path = require('path')
  const esbuild = require('esbuild')

  const args = require('./handlers/getCommandLineArgs')()
  const getEntryPoint = require('./handlers/getEntryPoint')
  const generateTypes = require('./handlers/generateTypes')
  const removeBuildFolder = require('./handlers/removeBuildFolder')

  const packageDir = args.packageDir || process.cwd()
  const packageJson = require(args.packageJsonPath ||
    path.join(packageDir, 'package.json'))

  const outputBuildFolder = args.dontOutputInBuildFolder ? '' : 'build'
  const payload = { packageJson }
  const { entryPoint, entryPointFile } = await getEntryPoint(packageDir)
  const outputPath = args.outputPath || packageDir
  const outfile = path.join(outputPath, outputBuildFolder, 'index.js')
  const format = args.format || 'esm'
  const target = args.target || 'es2019'
  const typesOutputDir = args.typesOutputDir || 'types'

  await removeBuildFolder()
  await generateTypes({
    outputPath,
    entryPointFile,
    packageDir,
    outputBuildFolder,
    typesOutputDir,
  })

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
