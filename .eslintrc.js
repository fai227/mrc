module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: "module", // Default script
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "prettier"],
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
  },
};
