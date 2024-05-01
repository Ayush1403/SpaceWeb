/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      spacing: {
        '11px': '11px',
        '116px': '116px',
        '144px': '144px',
        '19px': '19px',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '33px',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '99px',
        '5xl': '16px',
        '1lp': '66px',
      },
      height: {
        '128': '32rem',
      },
      width: {
        '128': '349px',
      }
    },
  },
  plugins: [],
}

