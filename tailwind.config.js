/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        luxury: {
          dark: '#111111',
          cream: '#F9F8F6',
          gold: '#C5A880'
        }
      }
    },
  },
  plugins: [],
}