/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors:{
        'jobsInputBg':'rgb(47,47,50)'
      },
      spacing: {
        '75': '1000px',
        '3.75':'60px'
      }
    },
  },
  plugins: [],
}
