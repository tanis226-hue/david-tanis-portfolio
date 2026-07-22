// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	// davidtanis.com belongs to the New York Times chef of the same name.
	// Change this and public/robots.txt together once the domain is registered.
	site: 'https://davidtanis.dev',
	output: 'static',
	integrations: [sitemap()],
	build: {
		inlineStylesheets: 'always',
	},
	devToolbar: {
		enabled: false,
	},
});
