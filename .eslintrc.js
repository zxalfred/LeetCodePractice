module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-unused-vars': 1,
    semi: [2, 'never'],
    'func-names': 0,
    'no-plusplus': 0,
    'max-len': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'no-bitwise': 0,
  },
};
