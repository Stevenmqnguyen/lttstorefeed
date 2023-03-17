/** @type {import('tailwindcss').Config} */

const iOSHeight = require("@rvxlab/tailwind-plugin-ios-full-height");

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [iOSHeight],
};

module.exports = config;
