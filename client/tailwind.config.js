/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF327C",
          secondary: "#FF023F",
          accent: "#0139FF",
          neutral: "#FF3767",
          "base-100": "#ffffff",
          info: "#7B7B7B",
          success: "#10B981",
          warning: "#ff8b2c",
          error: "#ef4444",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
