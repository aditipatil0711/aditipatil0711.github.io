/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightestBg: "#FFFAEC",
        lightShadeBg: "#F5ECD5",
        primaryAccent: "#578E7E",
        darkestText: "#3D3D3D",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"], // ✅ Tailwind recognizes this
        body: ["Inter", "sans-serif"], // ✅ Tailwind recognizes this
      },
      fontSize: {
        h1: ["36px", { lineHeight: "1.2" }], // ✅ Now Tailwind will generate classes like `text-h1`
        h2: ["28px", { lineHeight: "1.3" }],
        h3: ["22px", { lineHeight: "1.4" }],
        body: ["16px", { lineHeight: "1.6" }],
        small: ["14px", { lineHeight: "1.4" }],
      },
    },
  },
  plugins: [],
};
