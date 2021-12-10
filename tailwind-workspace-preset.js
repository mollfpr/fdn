const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        ...colors,
        primary: {
          DEFAULT: '#DC294F',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
