/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Adjust these paths based on your project structure
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#10232A",
        grayBlue: "#3D4D55",
        warmGray: "#A79E9C",
        cream: "#D3C3B9",
        sandal: "#B58863",
        blk: "#161616",
      },
      fontFamily: {
        meditative: ['"Meditative"', "cursive"],
        sallim: ['"Sallim"', "cursive"],
        kryshna: ['"Kryshna"', "cursive"],
        montserrat: ['"Montserrat"', "sans-serif"],
        jupiteroid: ['"Jupiteroid"', "cursive"],
      },
    },
  },
  plugins: [],
};
