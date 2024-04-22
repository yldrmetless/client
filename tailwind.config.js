/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily:{
      primary: "Poppins",
      secondary: "Montserrat",
      third: "Roboto",
      fourth: "Cormorant Garamond",
      fifth: "Raleway",
      sixth: "Nunito Sans",
      seventh: "Arimo",
      eighth: "Dancing Script"
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
  ],
};
