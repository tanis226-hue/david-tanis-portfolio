// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://davidtanis.com',
	output: 'static',
	integrations: [sitemap()],
	build: {
		inlineStylesheets: 'always',
	},
	devToolbar: {
		enabled: false,
	},
});
