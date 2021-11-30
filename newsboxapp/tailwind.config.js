module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          sage: "#87bcbf",
          rust: "#d97d54",
          drab: "#324755",
          danger: "#d95454",
          setup: "#ECEFF0",
        },
        secondary: {
          ice: "#f0f3f4",
          fossil: "#c8d1d3",
          sand: "#b9b0a2",
        },
        typografy: {
          onyx: "#1b1c20",
          slate: "#6e8ca0",
          snow: "#ffffff",
        },
        btn: {
          borderClr: "#F0F3F4",
        },
        dark: {
          primary: {
            one: "#000000",
            two: "#1e1c1e",
            three: "#3c383c",
            four: "#5a5459",
            five: "#787077",
          },
          secondary: {
            one: "#ffffff",
            two: "#f2f2f2",
            three: "#e6e6e6",
            four: "#d9d9d9",
            five: "#cccccc",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
