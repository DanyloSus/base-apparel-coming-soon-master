/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "desaturated-red": "hsl(0, 36%, 70%)",
        "soft-red": "hsl(0, 93%, 68%)",

        "dark-grayish-red": "hsl(0, 6%, 24%)",

        "linear-bg-one": {
          100: "hsl(0, 0%, 100%)",
          900: "hsl(0, 100%, 98%)",
        },
        "linear-bg-two": {
          100: "hsl(0, 80%, 86%)",
          900: "hsl(0, 74%, 74%)",
        },
      },
      screens: {
        mobile: { max: "1005px" },
      },
    },
  },
  plugins: [],
};
