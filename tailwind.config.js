/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    
   themes: 
   
   ["light", "dark", "black","forest"],
   

    
  },
  plugins: [require("daisyui")],
}
