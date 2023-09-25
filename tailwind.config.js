/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '75' : '700px',
        '30' : '400px',
        '90' : '900px', 
      }
    }
  },
  plugins: [],
}

