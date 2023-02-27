/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#21BFAF",
        orange: "#F3725C",
      },
      backgroundImage: {
        backgroundImg: "url(./src/asset/images/background.png)",
      },
    },
    screens: {
      desktop: "900px",
    },
  },
  plugins: [],
};
