/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5d60c1",
        dark: "#1e1e1e",
        light: "#f5f5f5",
        lightBlue: "#dbeff7",
        secondary: "#0c2c4c",
      },
      fontFamily: {
          sans: ["Nunito", "sans-serif"],
          cursive: ["Allura", "cursive"],
          serif: ["Montserrat Alternates", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          sm: "48px"
        }
      }

    },
  },
  plugins: [],
}

