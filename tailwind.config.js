/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        munsell: "#0792a5",
        cerulean: "#007ba5",
        aquamarine: "#7FFFD4",
        parchment: "#f0ead2",
        rosyBrown: "#B18D9B",
        test: "#f88379",
      },
    },
  },
  plugins: [],
};
