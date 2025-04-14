/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
        textSecondary: "var(--color-textSecondary)",
        border: "var(--color-border)",
        cardBg: "var(--color-cardBg)",
        buttonBg: "var(--color-buttonBg)",
        buttonText: "var(--color-buttonText)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px var(--color-shadowColor)",
        button: "0 4px 6px var(--color-shadowColor)",
        hover: "0 10px 25px var(--color-shadowColor)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};