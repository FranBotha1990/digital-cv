/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'custcol-indigodye': '#044b7f',
        'custcol-teal': '#107e7d',
        'custcol-pennred': '#95190c',
        'custcol-midnightgreen': '#19535f',
        'custcol-skobeloff': '0b7a75',
      },
    },
  },
  plugins: [],
}