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
    },
  },
  plugins: [],
};
