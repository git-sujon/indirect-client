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
          primary: "#00bfbc",
          secondary: "#07c196",
          accent: "#2D2B2A",
          neutral: "#0e2e50",
          "base-100": "#ffffff",
        },
      }
    ],
  },
}