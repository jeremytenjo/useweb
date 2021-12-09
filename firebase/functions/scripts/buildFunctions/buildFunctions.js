import path from 'path'

import esbuild from 'esbuild'

import getCommandLineArgs from './handlers/getCommandLineArgs.js'
import removeBuildFolder from './handlers/removeBuildFolder.js'

export default async function buildFunctions() {
  const args = getCommandLineArgs()
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
