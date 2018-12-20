module.exports = {
  "parserOptions": {
          "ecmaVersion": 6,
          "sourceType": "module",
          "ecmaFeatures": {
              "jsx": true,
              "modules": true
          }
      },
      "plugins": [
          "react",
          "cypress"
      ],
  "extends": [
    "standard",
    "plugin:react/recommended",
    "plugin:cypress/recommended"
  ],
  "env": {
    "cypress/globals": true
  },
  "settings": {
        "react": {
            "pragma": "React",
            "version": "16.5.1"
        }
    }
};
