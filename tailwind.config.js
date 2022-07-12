module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        // => @media (min-width: 320px) { ... }
      },

      fontFamily: {
        sans: ["Vazirmatn"],
      },

      spacing: {
        "6px": "6px",
      },

      boxShadow: {
        header: "0 4px 14px 0px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
