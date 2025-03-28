/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-palette-100": "#FEFFDE",
        "green-palette-200": "#DDFFBC",
        "green-palette-300": "#91C788",
        "green-palette-400": "#52734D",
      },
      fontFamily: {
        delius: ["Delius", "cursive"],
        sourgummy: ["Sour Gummy", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        autumn: {
          ...require("daisyui/src/theming/themes")["autumn"],
          fontFamily: "Delius, cursive",
        },
      },
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
};
