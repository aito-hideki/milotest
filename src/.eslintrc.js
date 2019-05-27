module.exports = {
    "extends": "standard",
    "rules" : {
        "indent": ["error", 2], // A custom style-related rule for example
        "semi": ["error", "never"],
        "quotes": ["error", "single"]
        // More custom rules here
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    parserOptions: {
      parser: 'babel-eslint'
    }
}