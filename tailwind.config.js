/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "400px",
      md: "740px",
      lg: "976px",
      xl: "1066px",
    },
    colors: {
      black:  "#282a36",
      gray:   "#44475a",
      white:  "#f8f8f2",
      blue:   "#8be9fd",
      green:  "#50fa7b",
      orange: "#ffb86c",
      pink:   "#ff79c6",
      purple: "#bd93f9",
      red:    "#ff5555",
      yellow: "#f1fa8c",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
