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
      green: {
        50: '#F2FFF5',
        100: '#D9FAE1',
        200: '#AAF0B9',
        300: '#89E89E',
        400: '#69E084',
        500: '#4DDA6C',
        600: '#3DB257',
        700: '#2E8C43',
        800: '#216630',
        900: '#14401D',
        950: '#040D06'
      },
      blue: {
        50: '#F2F9FF',
        100: '#D9EEFF',
        200: '#B0DAFF',
        300: '#8FCBFF',
        400: '#6EBBFF',
        500: '#4CACFF',
        600: '#3F8DD1',
        700: '#316EA3',
        800: '#234F75',
        900: '#153047',
        950: '#04090D'
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
      },
      greenAlpha: {
        50: '#4DDA6E',
        100: '#4DDA6Ee6',
        200: '#4DDA6Ecf',
        300: '#4DDA6Eb5',
        400: '#4DDA6E9e',
        500: '#4DDA6E85',
        600: '#4DDA6E6e',
        700: '#4DDA6E54',
        800: '#4DDA6E3d',
        900: '#4DDA6E26',
        950: '#4DDA6Ed',
      },
      blueAlpha: {
        50: '#4CACFF',
        100: '#4CACFFe6',
        200: '#4CACFFcf',
        300: '#4CACFFb5',
        400: '#4CACFF9e',
        500: '#4CACFF85',
        600: '#4CACFF6e',
        700: '#4CACFF54',
        800: '#4CACFF3d',
        900: '#4CACFF26',
        950: '#4CACFFd',
      },
    },
    extend: {
      fontFamily: {
        'robotoFlex' : ['Roboto Flex', 'sans-serif']
      }
    },
  },
  plugins: [],
}