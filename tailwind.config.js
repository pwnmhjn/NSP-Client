/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        index: {
          dark: "#538392",
          lessDark: "#6295A2",
          light: "#80B9AD",
          lessLight: "#B3E2A7",
          slate700: "#334155",
          slate200: "#E2E8F0",
          green: "#10b981",
          blue: "#0ea5e9",
          red: "#f43f5e",
          black: "#1e293b",
        },
        author: {
          dark: "#222831",
          lessDark: "#31363F",
          light: "#76ABAE",
          lessLight: "#EEEEEE",
        },
      },
      fontFamily: {},
    },
  },

  plugins: [],
};
