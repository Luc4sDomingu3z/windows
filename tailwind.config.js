/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "main": "1fr 32px"
      }
    },
  },
  plugins: [],
}

