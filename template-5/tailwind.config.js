module.exports = {
  purge: {
    enabled: true,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        orbitron: " 'Orbitron', sans-serif",
        spartan: "'Spartan', sans-serif",
        rajdhani: "'Rajdhani', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
