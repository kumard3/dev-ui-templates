import type { Config } from "tailwindcss";

const preset: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        surface: "#161616",
        line: "#2a2a2a",
        fg: "#ededed",
        muted: "#8f8f8f",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default preset;
