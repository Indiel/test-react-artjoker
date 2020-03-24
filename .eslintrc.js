module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-redux',
  ],
  rules: {
    "linebreak-style": 0,
    "arrow-body-style": ["error", "always"],
    // "arrow-body-style": ["error", "as-needed"],
    "object-curly-newline": ["error", { "multiline": true }],
    "react/prop-types" : [ 0 ]
  },
};
