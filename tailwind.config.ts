import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        card: "var(--card)",
        border: "var(--border)",
        accent: "var(--accent)",
        accent2: "var(--accent-2)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo"],
      },
      boxShadow: {
        soft: "0 12px 30px -18px rgba(15, 23, 42, 0.35)",
        glow: "0 0 20px -4px rgba(139, 92, 246, 0.4)",
        "glow-lg": "0 0 40px -8px rgba(139, 92, 246, 0.35)",
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)",
      },
      animation: {
        "fade-in": "fade-in-up 0.6s ease-out both",
        "glow-pulse": "pulse-glow 4s ease-in-out infinite",
      },
      keyframes: {
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
