/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#040918",
        secondary: "#03071e",
        text_primary: "#E5E7EB",

        error_primary: "#ff0e46",
        error_secondary: "#ffd00034",

        succes_primary: "#26d26534",

        buttons_primary: "#00eaff",
        buttons_secondary: "#14B8A6",

        icons_border: "1E293B",
        tertiary: "#151030",
      },

      keyframes: {
        "border-spin": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
      animation: {
        "border-spin": "border-spin 7s linear infinite",
      },
    },

    screens: {
      xs: "650px",

      sm: "855px",

      md: "990px",

      lg: "1180px",

      xl: "1280px",
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      const newaddUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };

      addUtilities(newaddUtilities);
    },
  ],
};
