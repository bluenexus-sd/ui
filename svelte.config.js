import { resolve } from 'path';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		// Vite config. See: https://vitejs.dev/config/
		vite: {
			resolve: {
				alias: {
					$components: resolve('src/components'),
					$utils: resolve('src/utils'),
					$styles: resolve('src/styles'),
				},
			},
		},
	},
};
