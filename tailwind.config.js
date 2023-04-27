/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: ['Figtree', 'sans-serif']
    },
    colors: {
      'main-bg': '#F8F9FD',
      'black': '#000000',
      'grey': '#868686',
      'purple': '#6F57E9',
      'light-purple': '#D3B0FF',
      'dark-gray': '#868686',
      'white':"#fff"
      
    },
    screens: {
      'md': '768px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'x-lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    boxShadow:{
      shadow: "0px 196px 78px rgba(21, 31, 72, 0.01), 0px 110px 66px rgba(21, 31, 72, 0.05), 0px 49px 49px rgba(21, 31, 72, 0.09), 0px 12px 27px rgba(21, 31, 72, 0.1), 0px 0px 0px rgba(21, 31, 72, 0.1)"
    }
    
  },
  plugins: [],
}

