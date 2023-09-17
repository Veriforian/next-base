/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-poppins)'],
      serif: ['var(--font-lora)'],
    },
    colors: {
      main: {
        light: '#20c997',
        medium: '#0ca678',
        dark: '#099268',
      },
      light: {
        light: '',
        medium: '#84A7B8',
        dark: '',
      },
      dark: {
        light: '',
        medium: '#74887E',
        dark: '',
      },
      white: {
        light: '',
        medium: '#FCFAFB',
        dark: '',
      },
      black: {
        light: '#495057',
        medium: '#242228',
        dark: '#212529',
      },
    },
  },
  plugins: [],
};
