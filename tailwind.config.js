/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          indigo: "#6366F1",
          violet: "#8B5CF6",
          cyan: "#06B6D4",
          emerald: "#10B981",
        },
        void: "#08090C",
        surface: {
          base: "#08090C",
          elevated: "#0E1117",
          card: "rgba(14, 17, 23, 0.75)",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(255, 255, 255, 0.16)",
        },
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(99, 102, 241, 0.25)",
        "glow-cyan": "0 0 35px -5px rgba(6, 182, 212, 0.25)",
        "glow-sm": "0 0 15px -3px rgba(99, 102, 241, 0.3)",
      },
    },
  },
  plugins: [],
};
