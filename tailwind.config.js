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
        light: '',
        medium: '#0ca678',
        dark: '',
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
        light: '',
        medium: '#242228',
        dark: '',
      },
    },
  },
  plugins: [],
};
