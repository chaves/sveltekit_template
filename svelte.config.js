import preprocess from 'svelte-preprocess';
import { resolve } from "path";
import vercel from '@sveltejs/adapter-vercel';
/** @type {import('@sveltejs/kit').Config} */
const config = {

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$data: resolve('./src/data'),
					$utilities: resolve('./src/utilities')
				}
			}
		},
		adapter: vercel()
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;