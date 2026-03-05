import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-0": "#080b12",
        "bg-1": "#0d111b",
        "bg-2": "#121828",
        "line-0": "#1f293f",
        "text-0": "#e5edf8",
        "text-1": "#a6b2c7",
        accent: "#30e6d0",
        "accent-2": "#36a3ff"
      },
      boxShadow: {
        card: "0 24px 60px rgba(0, 0, 0, 0.45)",
        glow: "0 0 0 1px rgba(48, 230, 208, 0.25), 0 0 30px rgba(48, 230, 208, 0.18)"
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;
