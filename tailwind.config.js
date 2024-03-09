/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: '"Inter Variable", sans'
      },
      textColor: {
        primary: '#f5f5f4',
        secondary: '#292524'
      }
    },
  },
  plugins: [],
}

