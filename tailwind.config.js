/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#f5d06f',
        dark: '#111217',
        card: '#181920',
        gray: '#b1b1b1',
      },
    },
  },
  plugins: [],
}
