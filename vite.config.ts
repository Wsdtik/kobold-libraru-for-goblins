import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		rollupOptions: {
			input: {
				theme: './src/themes/bongo-theme.css'
			}
		}
	}
});
