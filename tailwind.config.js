/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        figma: {
          blue: '#3738F9',     // The vibrant blue from your properties
          dark: '#0C0DB3',     // The deep navy/blue
          black: '#000000',    // The true black
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}