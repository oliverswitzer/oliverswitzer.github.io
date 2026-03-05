import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-0": "#050505",
        "bg-1": "#0a0a0a",
        "bg-2": "#141414",
        "line-0": "#2a2a2a",
        "text-0": "#f0ede6",
        "text-1": "#8a8478",
        accent: "#e8a838",
        "accent-2": "#f0c866"
      },
      boxShadow: {
        card: "0 24px 60px rgba(0, 0, 0, 0.45)",
        glow: "0 0 0 1px rgba(232, 168, 56, 0.2), 0 0 40px rgba(232, 168, 56, 0.08)"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Instrument Serif", "serif"],
        mono: ["JetBrains Mono", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;
