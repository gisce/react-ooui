const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blueGray: colors.blueGray,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      blue: colors.blue,
      green: colors.green,
      yellow: colors.yellow,
      black: colors.black,
      primary: "#001529",
      secondary: "#0054a4",
      terciary: "#148cfe",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
