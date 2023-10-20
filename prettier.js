module.exports = {
  useTabs: false,
  printWidth: 140,
  singleQuote: true,
  trailingComma: "none",
  jsxBracketSameLine: false,
  semi: true,
  quoteProps: "consistent",
  importOrder: [
    "^react(.*)$",
    "^next(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^@(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};
