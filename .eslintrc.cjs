module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: "prettier",
  extends: ["airbnb", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: { "prettier/prettier": "error" },
};
