/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#050505",
        glass: "rgba(255, 255, 255, 0.03)",
        "glass-border": "rgba(255, 255, 255, 0.08)",
        "cyber-cyan": "#00F0FF",
        "electric-violet": "#7000FF",
        "primary-text": "#F2F2F2",
        "secondary-text": "#8A8A8A",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "noise-pattern": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["black", "dark"], 
  },
};
