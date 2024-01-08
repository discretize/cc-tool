/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        base: "17.4px",
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      {
        discretizeDark: {
          primary: "#00CCCC",
          secondary: "#BD93F9",
          accent: "#00CCCC",
          neutral: "#2f3136",
          "base-100": "#26292e",
        },
      },
    ],
    defaultTheme: "dark",
  },
};
