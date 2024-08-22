/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors, 
      "olive": "#556B2F"
    },
    extend: {
      screens: {
        'sm-md': '620px', // Adiciona um breakpoint personalizado para 620px
      }
    },
  },
  plugins: [],
}