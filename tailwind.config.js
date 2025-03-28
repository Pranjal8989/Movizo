/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px", // Manually setting sm breakpoint to 480px
      },
    },
  },
  plugins: [],
};
