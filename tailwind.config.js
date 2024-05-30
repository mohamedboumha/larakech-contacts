/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2b5a75",
          from: "#2b5a75",
          to: "#2d99a8",
        },
      },
    },
  },
  plugins: [],
};
