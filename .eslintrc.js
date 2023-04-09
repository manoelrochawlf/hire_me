module.exports = {
    extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'prettier/@typescript-eslint',
      'prettier/react',
    ],
    plugins: ['react', '@typescript-eslint', 'prettier'],
    parser: '@typescript-eslint/parser',
    rules: {
      'prettier/prettier': 'error',
    },
  };