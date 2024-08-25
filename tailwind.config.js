/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    "./App.css",
    "./index.css",
    './components/**/*.{html,js,jsx,css}',
    "./src/**/*.{js,jsx,css}",
    './constants/**/*.{html,js,jsx}',
    './pages/**/*.{html,js,jsx}',
    "./css/**/*.css",
  ],
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // Other plugins...
  ],
}