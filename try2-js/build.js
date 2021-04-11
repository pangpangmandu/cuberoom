const esbuild = require('esbuild');

esbuild.build({
	entryPoints: ['./src/index.js'],
	bundle: true,
	outfile: './public/index.js',
	sourcemap: true,
  // ...
  plugins: [
  ],
})
