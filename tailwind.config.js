/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/*.js"],
  theme: {
    extend: {
    backgroundimage:{
      // 'my-image': "url(/10.jpg)",
    },
      fontFamily: {
        'pacifico': ["'Pacifico'",  'cursive'],
      },
    },
  },
  plugins: [],
}

