/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#dfeeec', /* Mint Green */
          100: '#f5f4f1', /* Light beige */
          200: '#e8e5df', /* Soft gray beige */
          300: '#d7d2c9', /* Sand */
          400: '#c1b8ad',
          500: '#a79c8e', /* Primary Accent - muted taupe */
          600: '#8c8072',
          700: '#75695d',
          800: '#60564d', /* Dark text accent */
          900: '#524942',
        },
        'novesse-green': '#0a2e1d',
        'novesse-gold': '#b68c48',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        agomo: ['Agoma', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
