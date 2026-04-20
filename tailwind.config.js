/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a5c2a",
        accent: "#4CAF50",
        dark: "#0f2d18",
        gold: "#f0a500",
      },
      fontFamily: {
        heading: ["'Oswald'", "sans-serif"],
        body: ["'Source Sans 3'", "sans-serif"],
      },
    },
  },
  plugins: [],
};