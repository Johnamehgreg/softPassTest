/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      screens: {
        xxs: '375px',
        xs: '425px',
      },
      colors: {
        softpasspurple: {
          300: '#E12179',
          500: '#331169',
        },
        softpassgray: {
          50:'#F7F8FA',
          100: 'rgba(51, 16, 107, 0.05)',
          150:'#CCCBD8',
          200: 'rgba(33, 63, 125)'
        },
        softpassblue:{
          100: '#DFDFE6',
          500: '#7218D8'
        },
        softpassgreen:{
          300:'#05CD99'
        }
      },
      fontSize: {
        xxs: '.625rem',
      },
    },
  },
  variants: {
    extend: {},
  },
}
