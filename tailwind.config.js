/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#faf8f5',
          100: '#f5f0e9',
          200: '#e8dfd3',
          300: '#d6c9b6',
          400: '#c2b299',
          500: '#a8997f',
          600: '#8b7d65',
          700: '#6f6451',
          800: '#544b3d',
          900: '#393329',
          950: '#26221a',
        },
        olive: {
          400: '#8a9a7b',
          500: '#6f7d5f',
          600: '#5a6849',
          700: '#475437',
        },
        lake: {
          400: '#6a93a6',
          500: '#4a7588',
          600: '#365c6e',
          700: '#264450',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
