/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'sports-blue': {
          DEFAULT: '#0236F2',
          75: '#5467AB',
          35: '#AFB3D9'
        },
        'sports-red': {
          DEFAULT: '#C50212',
          75: '#CC5441',
          35: '#E8B09E'
        },
        'sports-black': {
          DEFAULT: '#222221',
          75: '#585657',
          35: '#B1B1B1'
        }
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
EOL