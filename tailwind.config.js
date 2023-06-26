/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        ibm: "IBM Plex Sans, sans-serif",
        stratos: "Stratos Deliveroo Web, sans-serif",
        systemUi: "system-ui, sans-serif",
      },

      fontSize: {
        h1: "2rem",
        h2: "1.625rem",
        h3: "1.25rem",
        base: "1rem",
        17: "1.063rem",
        19: "1.188rem",
      },

      colors: {
        main: "#00cdbd",
        orange: "#ff8001",
        white: "#ffffff",
        black: "#2e3333",
        lightGrey: "#f3f5f5",
        darkGrey: "#868a8a",
        disabled: "#bac3c3",
        darkWhite: "#e9ebeb",

        darkTheme: {
          white: "#dce2e2",
          black: "#121212",
          darkGrey: "#242626",
          disabled: "#383e3e",
          lightBlack: "#1f1f1f",
        },
      },

      spacing: {
        mealsCardsGap: "20px",
        websiteWidth: "94vw",
      },

      lineHeight: {
        mealsCardDescription: "1.3rem",
      },

      objectPosition: {
        "center-bottom": "center bottom",
      },

      flexBasis: {
        "7/10": "70%",
        "3/10": "30%",
      },

      boxShadow: {
        card: "0 22px 24px 0 rgba(46, 51, 51, 0.07)",
        cartBottom: "0 -6px 6px -2px rgba(46, 51, 51, 0.07)",
      },

      inset: {
        cartTop: "2.5rem",
      },
    },
  },
  plugins: [],
};
