import type { Config } from "tailwindcss";
import devui from "@devui/ui/tailwind-preset";

const config: Config = {
  presets: [devui],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
};

export default config;
