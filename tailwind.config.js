/** @type import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: '#2C272E',
        dark: '#9D76C1',
        light: '#9AE66E'
      },
    },
  },
  plugins: [],
}