module.exports = {
  purge: {
    enabled: true,
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        jostRegular: ['jostregular', 'sans-serif'],
        jostMedium: ['jostmedium', 'sans-serif'],
        jostBold: ['jostbold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
