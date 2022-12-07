/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", './public/*.html','node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
      container: {
          center: true,
          themes: ["cupcake", "dark", "cmyk"],
      },
  },
  plugins: [
      require("daisyui"),
      require("flowbite/plugin"),
      ],

};
