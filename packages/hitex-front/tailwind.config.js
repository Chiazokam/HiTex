const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  safelist: ['ProseMirror'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
       screens: {
        'xs': '490px',
        // => @media (min-width: 490px) { ... }
      },
      fontSize: {
        xxs: ['10px', '16px'],
      }
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}
