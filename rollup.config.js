import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sass from 'rollup-plugin-sass';

const production = !process.env.ROLLUP_WATCH;
const K_ENV 		 = production ? 'prod' : 'dev';
const outputMap  = {
  'prod': {
    'js': 'build/js/bundle.js',
    'css': 'build/css/bundle.css'
  },
  'dev': {
    'js': 'public/js/bundle.js',
    'css': 'public/css/bundle.css'
  },
}

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: outputMap[K_ENV].js
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write(outputMap[K_ENV].css);
			}
		}),
		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve(),
		commonjs(),
		sass({
			output: true,

			// Filename to write all styles to
			output: outputMap[K_ENV].css,

			// Callback that will be called ongenerate with two arguments:
			// - styles: the contents of all style tags combined: 'body { color: green }'
			// - styleNodes: an array of style objects: { filename: 'body { ... }' }
			// output: function (styles, styleNodes) {
			// 	writeFileSync('public/css/bundle.css', styles)
			// },

			// inserting css file into <head>
			insert: true,
			// Determine if node process should be terminated on error (default: false)
			failOnError: true,
		}),
		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	]
};
