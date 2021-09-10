const { watch, jsx, node } = require('./handlers/getCommandLineArgs')()

require('esbuild').build({
  entryPoints: [`src/index.${jsx ? 'jsx' : 'js'}`],
  outfile: 'build/index.js',
  platform: node ? 'node' : 'browser',
  bundle: true,
  minify: true,
  format: 'esm',
  target: ['esnext'],
  watch,
  external: require('./handlers/getExternals')(),
})
