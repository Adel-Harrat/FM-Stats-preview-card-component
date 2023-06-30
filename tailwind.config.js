/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-very-dark-blue": "hsl(233, 47%, 7%)", // main background
        "my-dark-desaturated-blue": "hsl(244, 38%, 16%)", // card background
        "my-soft-violet": "hsl(277, 64%, 61%)", // accent
        "my-white": "hsl(0, 0%, 100%)", // main heading, stats
        "my-slightly-transparent-white": "hsla(0, 0%, 100%, 0.75)", // main paragraph
        "my-slightly-transparent-white": "hsla(0, 0%, 100%, 0.6)", // stat headings
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "lexend-deca": ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};
