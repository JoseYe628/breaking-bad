/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'breaking': {
          400: '#006a38',
          200: '#07782a'
        }
      },
      fontFamily: {
        'kdam': [ '"Kdam Thmor Pro"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
