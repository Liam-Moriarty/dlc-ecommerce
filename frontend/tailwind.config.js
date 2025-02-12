/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      colors: {
        // backgrounds
        primary: "#ffffff",
        white: "#f1f1f1",
        gray: "#c4c3c3",
        black: "#091035",
        red: "#f46a6a",

        // texts
        "black-text": "#0d111d",
        "white-text": "#e4e2e2",
        "gray-text": "#a7a5a5",
        "red-text": "#f46a6a",

        // hovers
        "black-hover": "#151c46",
        "white-hover": "#e4e4e4",
        "red-hover": "#f25b5b",

        // login / signup colors
        "auth-main": "#403A4D",
        "auth-black": "#2c2638",
        "auth-primary-text": "#ada4d1",
        "auth-white-text": "#faf9fc",
        "auth-gray-text": "#9b97a4",
        "auth-placeholder": "#3c364c",
        "auth-placeholder-text": "#6a667c",
        "auth-primary-button": "#6d54b5",
      },

      screens: {
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
