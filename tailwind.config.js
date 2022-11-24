/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4CFAFA",
          secondary: "#0D4C92",
          accent: "#2D2B2A",
          neutral: "#ED254E",
          special: "#FFF4E4",
          "base-100": "#ffffff",
        },
      }
    ],
  },
}