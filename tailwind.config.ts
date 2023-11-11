/* a configuration file for Tailwind CSS, a popular utility-first CSS
framework. */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
      },
      screens: {
        xs: "500px",
        mdl: "800px",
        xxl: "1400px",
      },
      fontFamily: {
        bodyFont: "Poppins",
      },
      colors: {
        primary: "#171c24",
      },
    },
  },

  plugins: [],
};
