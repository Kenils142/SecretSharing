/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFD372",
        primary: "#F15B42",
        secondary: "#F49CC4",
        tertiary: "#7CAADC",
        borders: "#2C3D73",
      },
      keyframes: {
        clickSpread: {
          "0%" : { background: "radial-gradient(circle, #F15B42330 0%, transparent 0%)"},
          "25%" : { background: "radial-gradient(circle, #F15B4230 25%, transparent 25%)"},
          "33%" : { background: "radial-gradient(circle, #F15B4230 50%, transparent 50%)"},
          "66%" : { background: "radial-gradient(circle, #F15B4230 75%, transparent 75%)"},
          "100%" : { background: "radial-gradient(circle, #F15B4230 100%, transparent 100%)"},
        },
      },
      animation: {
        clickSpread: "clickSpread 0.4s linear",
      },
    },
    plugins: [],
  }
};

