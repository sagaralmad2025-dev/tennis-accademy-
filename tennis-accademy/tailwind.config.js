/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ffffff",
        "navy-900": "#0f2b6e",
        "navy-800": "#0d245c",
        "navy-700": "#0a1c4a",
        "slate-gray": "#64748b",
      },
      fontFamily: {
        "display": ["Playfair Display", "serif"],
        "sans": ["Plus Jakarta Sans", "sans-serif"]
      },
      letterSpacing: {
        "widest": ".2em",
      }
    },
  },
  plugins: [],
}