/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        noto_arabic_primary: [
          '"Noto Kufi Arabic"',
          ...defaultTheme.fontFamily.sans,
        ],
        noto_arabic_secondary: ['"Amiri"', ...defaultTheme.fontFamily.sans],
        noto_english: ['"Noto Kufi Arabic"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
