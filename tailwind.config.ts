import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        munsell: "#0792a5",
        cerulean: "#007ba5",
        aquamarine: "#7FFFD4",
        parchment: "#f0ead2",
        onyx: "#35373d",
        test1: "pink",
        test2: "lightgreen",
      },
    },
  },
  plugins: [],
}
export default config
