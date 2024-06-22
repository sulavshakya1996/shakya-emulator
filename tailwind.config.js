/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: "rgb(237,237,237)",
        "primary-dark": "rgb(204, 204, 204)",


      }
    },

  },
  plugins: [],
}