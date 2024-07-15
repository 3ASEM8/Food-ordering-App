/** @type {import('tailwindcss').Config} */
const { withUt } = require("uploadthing/tw");

module.exports = withUt({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx,mdx}", // إضافة المسارات الخاصة بـ uploadthing
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f13a01",
      },
    },
  },
  plugins: [],
});
