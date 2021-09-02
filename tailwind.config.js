const daisy = require("daisyui");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [daisy],

  daisyui: {
    styled: true,
    themes: false,
    rtl: false,
  },
};
