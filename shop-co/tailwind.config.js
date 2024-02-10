/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'COLOR1': '#F0F0F0',
        'COLOR2': '#F2F0F1',
        'COLOR3': '#F0EEED',
      }
    },
  },
  plugins: [],
}