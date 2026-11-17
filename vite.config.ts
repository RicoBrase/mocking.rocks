import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: vitePreprocess(),
			adapter: adapter({
				fallback: 'index.html'
			})
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
