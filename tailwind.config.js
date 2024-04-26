/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},

    screens: {
      sm: "640px",

      md: "768px",

      lg: "1200px",

      xl: "1280px",

      "2xl": "1536px",
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
