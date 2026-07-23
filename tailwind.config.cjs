/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Schibsted Grotesk Variable"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['"Archivo Variable"', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      // Named scale replaces the 11 ad hoc sizes. Kept on `extend` so Tailwind's
      // default classes still resolve and nothing silently renders sizeless.
      fontSize: {
        display: ['clamp(2.4rem, 5.6vw, 4rem)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
        lead: ['clamp(1.6rem, 3.2vw, 2.35rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        title: ['1.375rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'body-l': ['1.125rem', { lineHeight: '1.55' }],
        body: ['1rem', { lineHeight: '1.6' }],
        meta: ['0.8125rem', { lineHeight: '1.55' }],
        label: ['0.72rem', { lineHeight: '1.4', letterSpacing: '0.14em' }],
      },
      colors: {
        bg: 'rgb(var(--color-bg-rgb) / <alpha-value>)',
        'bg-soft': 'rgb(var(--color-bg-secondary-rgb) / <alpha-value>)',
        surface: 'rgb(var(--color-surface-rgb) / <alpha-value>)',
        ink: 'rgb(var(--color-text-rgb) / <alpha-value>)',
        'ink-soft': 'rgb(var(--color-text-soft-rgb) / <alpha-value>)',
        'ink-muted': 'rgb(var(--color-text-muted-rgb) / <alpha-value>)',
        accent: 'rgb(var(--color-accent-rgb) / <alpha-value>)',
        'accent-dark': 'rgb(var(--color-accent-dark-rgb) / <alpha-value>)',
        line: 'rgb(var(--color-border-rgb) / <alpha-value>)',
      },
      maxWidth: {
        editorial: '68rem',
        wide: '76rem',
      },
    },
  },
  plugins: [],
};
