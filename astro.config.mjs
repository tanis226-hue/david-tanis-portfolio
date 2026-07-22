// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	// Keep in sync with the Sitemap line in public/robots.txt.
	site: 'https://tanis.zldagroup.com',
	output: 'static',
	integrations: [sitemap()],
	build: {
		inlineStylesheets: 'always',
	},
	devToolbar: {
		enabled: false,
	},
});
