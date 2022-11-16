/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        themewhite: "#F1FAEE",
        themered: "#E63946",
        themedarkblue: "#1D3557",
        themelightblue: "#A8DADC",
      }
    },
  },
  plugins: [],
}
