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
        primary: {
          DEFAULT: "#ff7a00",
          hover: "#e66c00",
        },
        secondary: {
          DEFAULT: "#1e41b0",
          hover: "#1a3a9e",
        },
      },
      boxShadow: {
        soft: "0 4px 16px rgba(0,0,0,0.06)",
      },
      animation: {
        float: "float 20s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "33%": { transform: "translateY(-20px) translateX(10px)" },
          "66%": { transform: "translateY(10px) translateX(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
