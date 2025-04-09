/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4361ee',
          dark: '#3a56d4'
        },
        secondary: {
          DEFAULT: '#3f37c9',
          dark: '#3832b0'
        }
      },
    },
  },
  plugins: [],
}
