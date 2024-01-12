import t from ''
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          "0%": { transform: "translateX(0)"},
          "50%": { transform: "translateX(.5rem)"},
          "100%": { transform: "translateX(0)"}
        },
        pulse: {
          "0%": { opacity: 1},
          "50%": { opacity:  .2 },
          "100%": { opacity: 1 }
        },
      },
      animation: {
        move: "move 2s infinite",
        pulse: "pulse 2s infinite"
      }
    },
  },
  plugins: [],
}