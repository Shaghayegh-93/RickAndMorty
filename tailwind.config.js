/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        system: ["system-ui", "sans-serif"],
        Avenir: ["Avenir", "sans-serif"],
        Helvetica: ["Helvetica", "sans-serif"],
        Arial: ["Arial", "sans-serif"],
      },
      colors: {
        slate900: "#0f172a",
        slate800: "#1e293b",
        slate700: "#334155",
        slate600: "#475569",
        slate500: "rgb(100, 116, 139)",
        slate400: "#94a3b8",
        slate300: "#cbd5e1",
        slate200: "#e2e8f0",
        slate100: "#f1f5f9",
        slate50: "#f8fafc",
        rose600: "#e11d48",
        rose500: "#f43f5e",
        green600: "#22c55e",
      },
    },
  },
  plugins: [],
};
