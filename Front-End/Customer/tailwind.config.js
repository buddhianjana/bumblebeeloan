module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //Color converter: https://convertingcolors.com/rgb-color-67_56_202.html?search=RGB(67,56,202)
        color_primary: "#006BFE",
        color_primary_darker: "#005BE2",
        color_primary_softer: "#3B82F6",
        color_tertiary: "#8BC9C8",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "spin-once": "spin 1s linear 1",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
