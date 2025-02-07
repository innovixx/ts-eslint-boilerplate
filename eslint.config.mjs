/** @typedef {import('eslint').Linter.Config} Config */

import baseConfig from '@innovixx/eslint-config/config/configs/base/index.mjs';
import typescriptConfig from '@innovixx/eslint-config/config/configs/typescript/index.mjs';
import esLintNodePlugin from 'eslint-plugin-node';

export const defaultESLintIgnores = [
  '**/.*',
  '**/.git',
  '**/README.md',
  '**/dist/',
  '**/build/',
  '**/node_modules/',
  '**/temp/',
];

/** @type {Config[]} */
export const rootEslintConfig = [
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
    plugins: {
      esLintNodePlugin,
    },
  },
  {
    rules: {
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'no-undef': 'off',
    },
  },
];

export default [
  ...rootEslintConfig,
];
