import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: "#FFF9F5",
        bubblegum: "#FF8FAB",
        sky: "#A0E7E5",
        lavender: "#D4B5FF",
        mint: "#B5EAD7",
        coral: "#FFAAA5",
        soft: "#5A4A6A",
      },
      fontFamily: {
        display: ["Fredoka", "system-ui", "sans-serif"],
        body: ["Nunito", "system-ui", "sans-serif"],
      },
      borderRadius: {
        soft: "1.5rem",
        bubble: "2rem",
      },
      boxShadow: {
        soft: "0 8px 32px rgba(255, 143, 171, 0.12)",
        "soft-lg": "0 12px 40px rgba(255, 143, 171, 0.18)",
        bubble: "0 10px 25px -5px rgba(255, 143, 171, 0.25)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "bounce-soft": "bounce-soft 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
