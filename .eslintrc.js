module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "prettier",
    "prettier/react"
  ],
  "plugins": [
    "react",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": [
      "error"
    ],
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/jsx-props-no-spreading": "off",
    "react/forbid-prop-types": "off"
  },
  "globals": {
    "graphql": false,
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  }
}
