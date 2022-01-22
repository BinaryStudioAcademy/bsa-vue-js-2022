module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/recommended", "eslint:recommended",],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/script-indent": ["error", 4, {
        "baseIndent": 1,
    },],
    "vue/html-indent": ["error", 4, {
        "baseIndent": 1,
    },],
    "quotes": ["error", "double", { "allowTemplateLiterals": true, },],
    "comma-dangle": ["error", {
        "arrays": "always",
        "objects": "always",
        "imports": "never",
        "exports": "never",
        "functions": "never",
    },],
    "semi": ["error", "always",],
  },
};
