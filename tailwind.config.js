/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
       center:true,
       padding:'2rem'
    },
    extend: {
      colors:{
        'brand': {
          '50': '#ecf4ff',
          '100': '#dceaff',
          '200': '#c0d8ff',
          '300': '#9abdff',
          '400': '#7295ff',
          '500': '#516fff',
          '600': '#4153fa',
          '700': '#2533dd',
          '800': '#212eb2',
          '900': '#232f8c',
          '950': '#151a51',
      },
      
      }
    },
  },
  plugins: [],
}

