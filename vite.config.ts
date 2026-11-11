import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
	// GitHub Pages serves the site from /<repo>, so the deploy workflow sets BASE_PATH.
	// Locally it's empty and the site runs from the root as usual.
	const { BASE_PATH = '' } = loadEnv(mode, '.', 'BASE_PATH');

	return {
		plugins: [
			tailwindcss(),
			sveltekit({
				compilerOptions: {
					// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
					runes: ({ filename }) =>
						filename.split(/[/\\]/).includes('node_modules') ? undefined : true
				},

				// Every page is prerendered to static HTML, so the build output can be
				// deployed as-is to Vercel, Netlify, or any static host.
				// 404.html lets static hosts send unknown addresses to the error page,
				// which redirects to the home page.
				adapter: adapter({ fallback: '404.html' }),

				paths: { base: BASE_PATH as '' | `/${string}` }
			})
		]
	};
});
