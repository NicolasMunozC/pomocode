/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      red: {
        50: '#FFF2F2',
        100: '#FFD9D9',
        200: '#FFB0B0',
        300: '#FF8F8F',
        400: '#FF6E6E',
        500: '#FF4C4C',
        600: '#D13F3F',
        700: '#A33131',
        800: '#752323',
        900: '#471515',
        950: '#0D0404'
      },
      redAlpha: {
        50: '#FF4C4C',
        100: '#FF4C4Ce6',
        200: '#FF4C4Ccf',
        300: '#FF4C4Cb5',
        400: '#FF4C4C9e',
        500: '#FF4C4C85',
        600: '#FF4C4C6e',
        700: '#FF4C4C54',
        800: '#FF4C4C3d',
        900: '#FF4C4C26',
        950: '#FF4C4Cd',
      }
    },
    extend: {
      fontFamily: {
        'robotoFlex' : ['Roboto Flex', 'sans-serif']
      }
    },
  },
  plugins: [],
}