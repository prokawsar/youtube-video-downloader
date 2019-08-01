import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss'

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/js/bundle.js'
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write('public/css/bundle.css');
			}
		}),
		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve(),
		commonjs(),
		scss({
			//Choose *one* of these possible "output:..." options
			// Default behaviour is to write all styles to the bundle destination where .js is replaced by .css
			output: true,

			// Filename to write all styles to
			output: 'public/css/bundle.css',

			// Callback that will be called ongenerate with two arguments:
			// - styles: the contents of all style tags combined: 'body { color: green }'
			// - styleNodes: an array of style objects: { filename: 'body { ... }' }
			output: function (styles, styleNodes) {
				writeFileSync('public/css/bundle.css', styles)
			},

			// Disable any style output or callbacks, import as string
			output: false,

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
