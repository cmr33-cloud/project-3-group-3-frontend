const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          primary: '#202225',
          secondary: '#5865f2',
          tertiary: '#050a30',
          gray: colors.trueGray,
          gray: {
            900: '#202225',
            800: '#2f3136',
            700: '#36393f',
            600: '#4f545c',
            400: '#d4d7dc',
            300: '#e3e5e8',
            200: '#ebedef',
            100: '#f2f3f5',
          },
          shade: {
            1: '#050a30',
            2: '#12229d',
            3: '#233dff',
            4: '#3a9bdc',
            5: '#5cb6f9',
            6: '#cae6ff',
            7: '#f4f6fc',
          }
        }
        
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
