import baseConfig from '@innovixx/eslint-config/config/configs/base/index.mjs';
import typescriptConfig from '@innovixx/eslint-config/config/configs/typescript/index.mjs';

export const defaultESLintIgnores = [
  '**/.*',
  '**/.git',
  '**/README.md',
  '**/dist/',
  '**/build/',
  '**/node_modules/',
  '**/temp/',
];

export default [
  baseConfig,
  typescriptConfig,
  {
    ignores: [
      ...defaultESLintIgnores,
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
  },
  {
    rules: {
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'no-undef': 'off',
    },
  }];
