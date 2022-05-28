module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        WorkSansBold: ['WorkSansBold', 'sans-serif'],
        WorkSansRegular: ['WorkSansRegular', 'sans-serif' ],
        WorkSansMedium: ['WorkSansMedium', 'sans-serif'],
        WorkSansSemiBold: ['WorkSansSemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
