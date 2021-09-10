const { watch, jsx } = require('./handlers/getOptions')()

require('esbuild').build({
  entryPoints: [`src/index.${jsx ? 'jsx' : 'js'}`],
  outfile: 'build/index.js',
  bundle: true,
  minify: true,
  format: 'esm',
  target: ['esnext'],
  watch,
  external: require('./handlers/getExternals')(),
})
