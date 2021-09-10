require('esbuild').buildSync({
  entryPoints: ['src/index.jsx'],
  outfile: 'build/index.js',
  bundle: true,
  minify: true,
  format: 'esm',
  target: ['esnext'],
  external: ['react'],
})
