const { watch } = require('./handlers/getOptions')()

require('esbuild').build({
  entryPoints: ['src/index.js'],
  outfile: 'build/index.js',
  bundle: true,
  minify: true,
  format: 'esm',
  target: ['esnext'],
  watch,
  external: require('./handlers/getExternals')(),
})
