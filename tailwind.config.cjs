/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#171717",
        light: "#FFFFFF",
        blue: "#33d2ff",
        "dark-gray": "#1A1A1A",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1080px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
