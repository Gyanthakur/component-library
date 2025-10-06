/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ← THIS IS MISSING - CRITICAL!
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // ← Your paths are wrong too
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}