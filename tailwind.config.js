/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
        },
      },
      fontSize: {
        custom_xs: "10px",
        custom_xxs:"18px",
        custom_sm: "64px",
        custom_md: "56px",
        custom_lg: "32px",
      },
      lineHeight: {
        custom_sm: "112%",
        custom_md: "133%",
        custom_lg: "142%",
        custom_xl: "225%",
        custom_2xl: "175%",
        custom_3xl:"190%",
      },
      colors: {
        royal_blue: "#191A42",
        sky_blue: "#48C3D7",
        blur_blue: "#24254B",
        dark_blue: "#111235",
        voilet: "#7C7DB9",
        grey: "#C9CAD4"
      }
    },
  },
  plugins: [],
}