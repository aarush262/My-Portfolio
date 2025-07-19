/** @type {import('tailwindcss').Config} */
module.exports = {
  darkmode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // for all files inside src/
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Custom Inter font
      },
      colors: {
        primary: '#7e22ce', // optional custom purple
        secondary: '#9333ea', // optional accent pink/purple
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // optional plugin for hiding scroll
  ],
};