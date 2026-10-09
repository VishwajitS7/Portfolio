/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Syne"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        lime: {
          DEFAULT: "#CCFF00",
          pop: "#D4FF00",
          muted: "#9AE600",
        },
        void: "#0C0D0E",
        ink: "#141618",
        carbon: "#1B1E22",
        steel: "#282C32",
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px #CCFF00",
        "brutal-white": "4px 4px 0px 0px #F4F5F6",
        "brutal-dark": "4px 4px 0px 0px #0C0D0E",
        "brutal-sm": "2px 2px 0px 0px #CCFF00",
        "brutal-subtle": "3px 3px 0px 0px rgba(255, 255, 255, 0.12)",
      },
    },
  },
  plugins: [],
};
