/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sedan : ["Sedan SC"],
        cinzel : ["Cinzel"],
      },
      colors:{
        pinkish : "rgb(250, 230, 250)", 
        trans: "rgba(30, 18, 18, 0.5)"
      },
      spacing:{
        perf : "calc(100vh - 200px)",
        perf2 : "calc(100% - 100px)",
        perf1: "calc(100vh - 300px)",
        neg: "-100px",
        neg5: "-50%",
        very : "400px",
        svery : "300px",
      }
    },
  },
  plugins: [],
}