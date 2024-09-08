/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        },
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '984px',
          '2xl': '984px',
        }
      }
    },
  },
  plugins: [],
}
