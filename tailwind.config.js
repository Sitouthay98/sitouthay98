/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class',

  theme: {
    extend: {
      colors:{
        primaryBg: "#F5F5F5",
        primaryTitle: "#F0F5F9",
        primaryText: "#C9D6DF",

        darkBg: "#F0F5F9",
        darkTitle: "#1E2022",
        darkText: "#52616B",

        primaryBtn: "#068FFF",
        primaryMouseOn: "#A0E9FF",
        primaryBgTag: "#5FBDFF"
      }
    },
  },
  plugins: [],
}

