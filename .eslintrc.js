module.exports = 
    {
  "env": {
    "node": true
  },
  "parser": "babel-eslint",
  "rules": {
    "array-bracket-spacing": [2, "never"],
    "block-scoped-var": 2,
    "brace-style": [2, "1tbs"],
    "camelcase": 1,
    "computed-property-spacing": [2, "never"],
    "curly": 2,
    "eol-last": 2,
    "eqeqeq": [2, "smart"],
    "max-depth": [1, 3],
    "max-len": [1, 80],
    "max-statements": [1, 15],
    "new-cap": 1,
    "no-extend-native": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-trailing-spaces": 2,
    "no-unused-vars": 1,
    "no-use-before-define": [2, "nofunc"],
    "quotes": [
      2,
      "single", {
        "allowTemplateLiterals": true
      }
    ],
    "semi": [2, "always"],
    "keyword-spacing": [2, {
      "before": true,
      "after": true
    }],
    "space-unary-ops": 2,
    "no-shadow": 1,
    "import/no-extraneous-dependencies": "off",
    "import/unambiguous": "off"
  },
  "ecmaFeatures": {
    "jsx": true,
    "modules": true
  }
}