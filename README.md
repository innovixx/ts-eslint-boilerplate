# TypeScript ESLint Boilerplate

## Highlights

A production-ready TypeScript boilerplate with integrated tooling for linting, type-checking, and development. Includes Innovixx's modern ESLint configuration with pre-configured development practices and build setup.

## Quick Start

To use the TypeScript ESLint boilerplate, follow these steps:

1. Clone the repository and install dependencies:

```bash
git clone git@github.com:innovixx/ts-eslint-boilerplate.git
cd ts-eslint-boilerplate
pnpm i
```

2. Start the development server:

```bash
pnpm run dev
```

3. Create new code in the src/ directory following the existing example patterns.

## Usage

 - Development: Use `pnpm run dev` to run your TypeScript code with hot-reload via tsx
 - Build: Run `pnpm run build` to compile TypeScript to JavaScript in the dist/ directory
 - Linting: Run `pnpm run lint` to check code quality and style with ESLint

## Pre-commit Checks

This project uses Husky and lint-staged to automatically run ESLint and TypeScript type-checking on commit for staged files. No configuration needed—hooks are installed with `pnpm install`.

## License

[MIT](https://github.com/innovixx/ts-eslint-boilerplate/blob/master/LICENSE) Copyright (c) Innovixx Digital Limited