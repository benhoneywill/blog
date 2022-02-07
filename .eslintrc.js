module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb", "airbnb/hooks", "prettier", "prettier/react"],
  plugins: ["react", "prettier"],
  globals: {
    graphql: false
  },
  ignorePatterns: ["content/**"],
  rules: {
    "prettier/prettier": ["error"],
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "react/forbid-prop-types": "off"
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  }
};
