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
      'orange': {
        '50': '#fef5ee',
        '100': '#fde9d7',
        '200': '#facfae',
        '300': '#f6ad7b',
        '400': '#f28045',
        '500': '#ef682e', //main
        '600': '#df4517',
        '700': '#b93315',
        '800': '#932a19',
        '900': '#772617',
        '950': '#40100a',
    },
    
      
      }
    },
  },
  plugins: [],
}

