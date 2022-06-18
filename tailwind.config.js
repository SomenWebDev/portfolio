/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#6975ce",

          secondary: "#4532c1",

          accent: "#457a04",

          neutral: "#30263B",

          "base-100": "#F2F2F3",

          info: "#449ECA",

          success: "#137C59",

          warning: "#F6BA13",

          error: "#E45553",
        },
      },
      "dark",
    ],
  },

  plugins: [require("daisyui")],
};
