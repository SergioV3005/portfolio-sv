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
        mono: ["ui-monospace", "SFMono-Regular", "Menlo"],
      },
      boxShadow: {
        soft: "0 12px 30px -18px rgba(15, 23, 42, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
