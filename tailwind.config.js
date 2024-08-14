/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1536px",
      "4xl": "1920px",
    },
    container: {
      center: true,
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF7214",
          50: "#FFF5E5",
          100: "#FFE6CC",
          200: "#FFCC99",
          300: "#FFB266",
          400: "#FF9933",
          500: "#FF7214", // Default color
          600: "#E65E00",
          700: "#B34700",
          800: "#802F00",
          900: "#4D1A00",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#3A3A3A",
        },
      },
      fontFamily: {
        koulen: ["var(--koulen-font-sans)"],
        poppins: ["var(--poppins-font-sans)"],
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class",
};
