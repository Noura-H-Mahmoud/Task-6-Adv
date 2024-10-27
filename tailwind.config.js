/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: ["./src/**/*.{html,js,jsx}",],
  theme: {
    extend: {
      spacing: {
        '30': '30px',
        '1440': '1440px',
        '150': '150px',
        '60': '60px',
        '24px': '24px'
      },
      colors: {
        lineColor: '#00000057',
        purple: '#6941C6',
        textColor: '#667085',
        blueColor: '#3538CD',
        roseColor: '#C11574',
        aquaColor: '#026AA2',
        greenColor: '#027A48',
        orangeColor: '#C4320A',
        violetColor: '#363F72',
        darkColor: '#090D1F',
        textDarkColor: '#C0C5D0'
      }
    },
  },
  plugins: [],
}

