/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#eef7fe',
          100: '#d7e8fd',
          200: '#b4d5fb',
          300: '#8fc1f9',
          400: '#64a9f6',
          500: '#3b8df2',
          600: '#2874d1',
          700: '#1d5ab0',
          800: '#16468e',
          900: '#123871',
        },
      },
    },
  },
  plugins: [],
};
