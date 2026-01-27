/**
 * @see https://prettier.io/docs/configuration
 * @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions}
 */
export default {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  tailwindStylesheet: "./src/assets/global.css",
  plugins: ["prettier-plugin-tailwindcss"],
};
