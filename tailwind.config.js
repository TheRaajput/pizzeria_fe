/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        loginImage:
          "url(https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg)",
      },
      colors: {
        blush: "#B25068",
        cumulus: "#FDFDBD",
      },
    },
  },
  plugins: [],
};
