/** @type {import("prettier").Config} */
export default {
  useTabs: false,
  semi: true,
  singleQuote: true,
  tsxSingleQuote: true,
  trailingComma: "none",
  arrowParens: "avoid",
  printWidth: 110,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
