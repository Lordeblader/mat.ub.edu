const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sans': ['var(--font-sans)', ...fontFamily.sans],
        'display': ['var(--font-display)', ...fontFamily.sans],
        'mono': ['var(--font-mono)', ...fontFamily.mono]
      },
      colors: {
        'endeavour': {
          '50': '#f0f8ff',
          '100': '#dfefff',
          '200': '#b9dffe',
          '300': '#7bc8fe',
          '400': '#34abfc',
          '500': '#0a91ed',
          '600': '#0072cb',
          '700': '#0062b2',
          '800': '#054e87',
          '900': '#0a4070',
          '950': '#07294a',
        },
      },
    },
  },
  plugins: [],
}
