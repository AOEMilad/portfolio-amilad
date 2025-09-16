import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        colorPalateGold: "#C7A925",
        colorPalateGreen: "#558957",
        colorPalateWhite: "#E8DDBE",
        colorPalateBlack: "#1A1A1A",
        brand: {
          green:  '#5B5C31',
          beige:  '#D9BFA0',
          gold:   '#F2A35E',
          brown:  '#59452C',
          dark:   '#240902',
        }
      },
    },
  },
  plugins: [],
};
export default config;
