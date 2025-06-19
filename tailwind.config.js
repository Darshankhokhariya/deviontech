/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fe5a19",
        "primary-hover": "#0b4caf",
        "placeholder": "#a3a5b6",
        "heading": "#1a3760",
        "lightGray": "#9c9eb1",
        "normalDark": "#333333",
        "deepDark": "#000000",
        "nav": "#727272"
      },
      animation: {
        'float': 'floatAnimation 3s ease-in-out infinite',
      },
      keyframes: {
        floatAnimation: {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-20%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}