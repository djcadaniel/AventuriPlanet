/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {

      },
      backgroundColor: theme =>({
        ...theme('colors'),
        'primary' : 'blue',
        'secondary' : 'red',
        'terciary' : 'green',
        'btn' : 'orange'
      }),
      textColor : {
        'primary' : 'white',
        'secondary' : 'black'
      },
      fontFamily:{
        Montserrat : ['Montserrat',  'sans-serif']
      }
    },
  },
  plugins: [],
}