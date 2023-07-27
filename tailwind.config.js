/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btnGreen: '#55B07C',
        btnRed: '#E85F5C',
        lightStone: '#F0F0F0',
        fillGrey: '#F4F6F9',
        lightBlack: '#B1B0C0',
        testPurple: 'rgb(145, 85, 253)',
        testGrey: '#777777',
        deepGreen: '#187979',
        error: '#FF6262',
        popupBG: '#F4F6F9',
      },
    },
  },
  plugins: [],
  darkMode: "class"
};
