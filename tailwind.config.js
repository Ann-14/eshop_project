/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    // themes: ["light", "dark", "valentine"],
    themes: [ 
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#3d4451",
      }
    },
    "corporate",
    ],
  },
  plugins: [require("daisyui")],
}
