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
       " custom-xs": "10px",
        "custom-xxs": "18px",
        "custom-xsm": "29px",
        "custom-sm": "64px",
        "custom-md": "56px",
        "custom-lg": "32px",
      },
      lineHeight: {
        "custom-sm": "112%",
        "custom-md": "133%",
        "custom-lg": "142%",
        "custom-xl": "225%",
        "custom-2xl": "175%",
        "custom-3xl":"190%",
      },
      colors: {
        "royalblue": "#191A42",
        "skyblue": "#48C3D7",
        "blurblue": "#24254B",
        "darkblue": "#111235",
        "voilet": "#7C7DB9",
        "grey": "#C9CAD4"
      }
    },
  },
  plugins: [],
}