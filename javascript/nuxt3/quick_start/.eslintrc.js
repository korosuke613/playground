module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: [],
  rules: {},
  overrides: [
    {
      files: ["pages/*.vue"],
      rules: {
        "vue/multi-word-component-names": "off",
      },
    },
  ],
};
