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
      // Extend available colors
      colors: {
        'custcol-indigodye': '#044b7f',
        'custcol-teal': '#107e7d',
        'custcol-pennred': '#95190c',
        'custcol-midnightgreen': '#19535f',
        'custcol-skobeloff': '#209999',
      },
      // Create custom background with gradient
      backgroundImage: theme => ({
        'cust-gradient': 'linear-gradient(120deg, #044b7f 0%, #107e7d 50%, #19535f 100%)',
      }),
    },
  },
  plugins: [],
}