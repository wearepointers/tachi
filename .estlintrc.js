module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  extends: ['plugin:prettier/recommended', 'plugin:@typescript-eslint/strict']
};
