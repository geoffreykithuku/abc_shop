/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FA8232",
        },
        secondary: {
          DEFAULT: "#F5F5F5",
        },
        green: {
          DEFAULT: "#249B3E",
          100: "#249B3E",
        },
        black: {
          DEFAULT: "#666666",
          100: "#100d25",
        },

        "gray-light": {
          DEFAULT: "#EEEEEE",
        },

        blue: {
          DEFAULT: "#3478F6",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        custom: "0px 4px 3px rgba(0, 0, 0, 0.3)",
      },

      screens: {
        xs: "450px",
      },
    },

    plugins: [],
  },
  plugins: [],
};
