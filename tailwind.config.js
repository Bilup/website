/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./themes/hugo-saasify/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./hugo.toml"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F2F9F9',
          100: '#E0F1F2',
          200: '#BCE1E3',
          300: '#99D1D3',
          400: '#75C1C4',
          500: '#51B1B5',
          600: '#3F9194',
          700: '#306E70',
          800: '#214B4C',
          900: '#112829',
        },
        dark: {
          DEFAULT: '#222222',
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#d4d4d4',
          300: '#a3a3a3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#222222',
          800: '#262626',
          900: '#1a1a1a',
          950: '#0d0d0d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#d1d5db',
            '--tw-prose-headings': '#75C1C4',
            '--tw-prose-links': '#75C1C4',
            '--tw-prose-bold': '#3F9194',
            '--tw-prose-quotes': '#75C1C4',
            '--tw-prose-kbd': '#75C1C4',
            '--tw-prose-code': '#75C1C4',
            '--tw-prose-hr': '#404040',
            '--tw-prose-quote-borders': '#404040',
            '--tw-prose-td-borders': '#404040',
            '--tw-prose-invert-body': '#d1d5db',
            '--tw-prose-invert-headings': '#75C1C4',
            '--tw-prose-invert-links': '#75C1C4',
            '--tw-prose-invert-bold': '#3F9194',
            '--tw-prose-invert-quotes': '#75C1C4',
            '--tw-prose-invert-kbd': '#75C1C4',
            '--tw-prose-invert-code': '#75C1C4',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
