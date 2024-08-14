/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
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
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".btn": {
          "@apply font-koulen p-1.5 px-10 md:px-12 lg:px-16 py-2 md:py-4 text-lg md:text-[20px] lg:text-2xl transition-all leading-9 inline-block rounded-lg":
            {},
        },
        ".btn-primary": {
          "@apply bg-primary hover:bg-primary-600": {},
        },
        ".btn-white": {
          "@apply bg-white hover:bg-primary hover:text-white text-primary": {},
        },
      };
      addUtilities(newUtilities);
    },
  ],
  darkMode: "class",
};
