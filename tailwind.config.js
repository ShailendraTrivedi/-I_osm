/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: { min: "0px", max: "400px" },
      md: { min: "400px", max: "800px" },
      lg: { min: "800px", max: "1200px" },
      xl: { min: "1200px" },
    },
  },
  plugins: [],
};
