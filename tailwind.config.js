/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {   
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'yellow-green': '#8BC440',
        'platinum': '#DDDDDD',
        'imperial-red': '#FE4148',
        'dark-purple': '#2F2339',
        'blue-palette-100': '#EEEEEE',
        'blue-palette-200': '#00ADB5',
        'blue-palette-300': '#393E46',
        'blue-palette-400': '#222831',
        'green-palette-100': '#FEFFDE',
        'green-palette-200': '#DDFFBC',
        'green-palette-300': '#91C788',
        'green-palette-400': '#52734D',
      },
    },
  },
  plugins: [],
};
