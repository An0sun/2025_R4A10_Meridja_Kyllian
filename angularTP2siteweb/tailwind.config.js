/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        muli: ["Muli", "sans-serif"],
      },
      colors: {
        gray900: "#1f2937",
        gray500: "#6b7280",
      },
    },
  },
  plugins: [],
};
