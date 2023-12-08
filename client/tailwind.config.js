/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '2xl': '0px 2px 40px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

