module.exports = {
  extends: [
    '@innovixx/eslint-config/configs/base',
    '@innovixx/eslint-config/configs/typescript',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
  },
};
