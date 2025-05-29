/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pepe-green': '#4CAF50',
        'pepe-dark-green': '#388E3C',
        'pepe-light-green': '#81C784',
      },
    },
  },
  plugins: [],
};