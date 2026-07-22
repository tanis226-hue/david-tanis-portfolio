# davidtanis.com

Personal one-page site. Separate from ZLDA Group by design: ZLDA sells the company, this sells the individual.

## Stack

Astro 5 (static) + Tailwind via PostCSS + self-hosted Archivo / Schibsted Grotesk. Same toolchain as the ZLDA site so deploys behave identically. No adapter, no SSR, no database.

```
npm install
npm run dev      # localhost:4321
npm run build    # -> dist/
```

## Deploy

Netlify, build `npm run build`, publish `dist`. Config is in `netlify.toml`.

## Editing

Content lives in the frontmatter of [`src/pages/index.astro`](src/pages/index.astro): `work` and `principles` are plain arrays. Design tokens (color, dark mode) are CSS variables at the top of [`src/styles/global.css`](src/styles/global.css).

## Claims policy

Every figure on the site is engineering scale (lines, tables, routes, tests), taken from a direct code review rather than README claims. No usage, revenue, or retention numbers appear anywhere, because none are supported. Keep it that way: if a number cannot be pointed at in a repo, it does not go on the site.
