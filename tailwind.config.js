/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        noto_arabic: ['"Noto Naskh Arabic"', ...defaultTheme.fontFamily.sans],
        noto_english: ['"Noto Kufi Arabic"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
