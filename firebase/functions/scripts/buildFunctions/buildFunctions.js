const path = require('path')

const esbuild = require('esbuild')

const args = require('./handlers/getCommandLineArgs')()
const removeBuildFolder = require('./handlers/removeBuildFolder')

module.exports = async function buildFunctions() {
  const rootPath = path.join(process.cwd(), 'firebase', 'functions')
  const entryPoint = path.join(rootPath, 'src', 'index.js')
  const outfile = path.join(rootPath, 'build', 'index.js')

  await removeBuildFolder()

  esbuild.build({
    entryPoints: [entryPoint],
    outfile,
    platform: 'browser',
    bundle: true,
    minify: true,
    format: 'cjs',
    target: ['es2017'],
    watch: args.watch,
    external: ['firebase-admin', 'firebase-functions'],
  })
}
