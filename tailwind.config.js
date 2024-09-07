/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'darkBlue':' hsl(234, 29%, 20%)',
        'gray':' hsl(231, 7%, 60%)',
        'tomato':'hsl(4, 100%, 67%)'
      },
      backgroundColor:{
        'linearGradient' : 'to right, hsl(4, 100%, 67%), hsl(354, 100%, 67%)',
        'dark':'hsl(234, 29%, 20%)'
      }
    },
  },
  plugins: [],
}