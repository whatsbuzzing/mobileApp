/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        veryDark: "#080808",
        firePink: "#f64f59",
        buzzingPurple: "#c471ed",
        chilledBlue: "#12c2e9",
        dark4: "#191919",
        dark3: "#4c4c4c",
        dark2: "#7f7f7f",
        dark1: "#b2b2b2",
        light: "#f2f2f2",
      },
    },
  },
  plugins: [],
};
