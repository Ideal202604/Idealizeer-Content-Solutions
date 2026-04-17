/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "embed-figma-com-inter-medium":
          "var(--embed-figma-com-inter-medium-font-family)",
        "embed-figma-com-inter-semi-bold":
          "var(--embed-figma-com-inter-semi-bold-font-family)",
      },
    },
  },
  plugins: [],
};
