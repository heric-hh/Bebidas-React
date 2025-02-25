/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/header.jpg')",
      },
      colors: {
        primary: "#16322D",
        secondary: "#1E1E1E",
      },
    },
  },
  plugins: [],
};
