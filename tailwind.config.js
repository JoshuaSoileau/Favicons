const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const fonts = require("./src/fonts.json");

const otherFonts = fonts.others.reduce(
  (total, item) => ({
    ...total,
    [item.title]: [item.name],
  }),
  {}
);

let makeShadow = (name, rgb) => {
  let obj = {};

  obj[name + "-xs"] = `0 0 0 1px rgba(${rgb}, 0.05)`;
  obj[name + "-xs"] = `0 0 0 1px rgba(${rgb}, 0.05)`;
  obj[name + "-sm"] = `0 1px 2px 0 rgba(${rgb}, 0.05)`;
  obj[name] = `0 1px 3px 0 rgba(${rgb}, 0.1), 0 1px 2px 0 rgba(${rgb}, 0.06)`;
  obj[
    name + "-md"
  ] = `0 4px 6px -1px rgba(${rgb}, 0.1), 0 2px 4px -1px rgba(${rgb}, 0.06)`;
  obj[
    name + "-lg"
  ] = `0 10px 15px -3px rgba(${rgb}, 0.1), 0 4px 6px -2px rgba(${rgb}, 0.05)`;
  obj[
    name + "-xl"
  ] = `0 20px 25px -5px rgba(${rgb}, 0.1), 0 10px 10px -5px rgba(${rgb}, 0.04)`;
  obj[name + "-2xl"] = `0 25px 50px -12px rgba(${rgb}, 0.25)`;
  obj[name + "-inner"] = `inset 0 2px 4px 0 rgba(${rgb}, 0.06)`;
  return obj;
};

module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      screens: {
        "3xs": "320px",
        "2xs": "360px",
        xs: "480px",
      },

      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "3.5rem",
        "8xl": "4rem",
        "9xl": "4.5rem",
      },
      boxShadow: (theme) => ({
        xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        default:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
        none: "none",
        // Build on top of our existing colors
        ...Object.entries(theme("colors"))
          .map(([key, value]) => makeShadow(key, value))
          .reduce((acc, cur) => ({ ...acc, ...cur }), {}),
      }),
      colors: {
        indigo: colors.indigo,
        blue: colors.blue,
        cyan: colors.cyan,
        teal: colors.teal,
        lightBlue: colors.lightBlue,
      },
      fontFamily: {
        sans: [fonts.sans.name, ...defaultTheme.fontFamily.sans],
        serif: [fonts.serif.name, ...defaultTheme.fontFamily.sans],
        ...otherFonts,
      },
      fontSize: {
        "2xs": ["0.7rem", ".85rem"],
      },
      minWidth: (theme) => ({
        ...theme("spacing"),

        0: "0",
        "1/6": "16.66%",
        "1/4": "25%",
        "3/4": "75%",
        "1/2": "50%",
        "1/3": "33.33%",
        "2/3": "66.66%",

        full: "100%",
      }),
      maxWidth: (theme) => ({
        ...theme("spacing"),

        0: "0",
        "1/6": "16.66%",
        "1/4": "25%",
        "3/4": "75%",
        "1/2": "50%",
        "1/3": "33.33%",
        "2/3": "66.66%",

        full: "100%",
      }),
      spacing: (theme) => ({
        ...theme("screens"),
        "1/2": "50%",
        "2/3": "66.66%",
      }),
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  variants: {
    extend: {
      display: ["empty"],
      margin: ["first", "last", "empty"],
      opacity: ["empty"],
      padding: ["empty"],
      scale: ["active", "group-hover"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ addVariant, e }) => {
      addVariant("empty", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.empty${e(separator + className)}:empty`;
        });
      });
    }),
  ],
};
