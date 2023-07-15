/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* custom colors*/
        red: {
          100: "#f4cecf",
          200: "#e99d9e",
          300: "#dd6d6e",
          400: "#d23c3d",
          500: "#c70b0d",
          600: "#9f090a",
          700: "#770708",
          800: "#500405",
          900: "#280203",
        },
        wine: {
          100: "#e8cdcd",
          200: "#d29b9b",
          300: "#bb6868",
          400: "#a53636",
          500: "#8e0404",
          600: "#720303",
          700: "#550202",
          800: "#390202",
          900: "#1c0101",
        },
        teal: {
          100: "#cdebd5",
          200: "#9ad6ab",
          300: "#68c280",
          400: "#35ad56",
          500: "#03992c",
          600: "#027a23",
          700: "#025c1a",
          800: "#013d12",
          900: "#011f09",
        },
        orange: {
          100: "#fcebd7",
          200: "#fad8af",
          300: "#f7c488",
          400: "#f5b160",
          500: "#f29d38",
          600: "#c27e2d",
          700: "#915e22",
          800: "#613f16",
          900: "#301f0b",
        },
      },
      placeholderColor: {
        white: "#FFFFFF",
      },
      fontFamily: {
        bree: ["Bree Serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};
