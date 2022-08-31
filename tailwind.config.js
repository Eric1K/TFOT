/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Poppins: ["Poppins, san-serif"]
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
