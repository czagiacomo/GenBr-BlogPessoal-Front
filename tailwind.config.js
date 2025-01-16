/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {   
      colors: {
        'green-palette-100': '#FEFFDE',
        'green-palette-200': '#DDFFBC',
        'green-palette-300': '#91C788',
        'green-palette-400': '#52734D',
      },
    },
  },
  plugins: [],
};
