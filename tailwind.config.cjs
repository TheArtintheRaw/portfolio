/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#001b3f",
        secondary: "#f3f3f3",
        tertiary: "#BF2051",
        "black-100": "#1B4571",
        "black-200": "#081423",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      
    },
  },
  plugins: [],
};
