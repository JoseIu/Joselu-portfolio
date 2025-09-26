import js from '@eslint/js';

import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
  {
    files: ['**/*.{ts,tsx,js,jsx,astro}'],
    languageOptions: {
      parser: eslintPluginAstro.parser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      }
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  }
];
