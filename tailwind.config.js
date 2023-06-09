/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm:"468px",
      md:"768px",
      lg:"976px",
      xl:"1440px",
    },
    extend: {
      colors:{
        brightRed:'hsl(12,80%,59%)',
        brightRedLight:'hsl(12,80%,69%)',
        darkBlue:'hsl(228,39%,23%)',
        brightRedSupLight:'hsl(12,88%,95%)',
        lightGray: '#EAEAEA'
      }
    },
  },
  plugins: [],
}