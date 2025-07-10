/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0287a8",
        secondary: "#00c3c7"
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "5rem",
          "2xl": "6rem"
        }
      }
    }
  },
  plugins: []
}
