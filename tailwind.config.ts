import type { Config } from "tailwindcss";

const channel = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

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
        bg: channel("bg"),
        surface: channel("surface"),
        fg: channel("fg"),
        muted: channel("muted"),
        line: channel("line"),
        accent: channel("accent"),
        accent2: channel("accent-2"),
        accent3: channel("accent-3"),
        border: "rgb(var(--line) / 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo"],
      },
      boxShadow: {
        glow: "0 0 24px -6px rgb(var(--accent) / 0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
