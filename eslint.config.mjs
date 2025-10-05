import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import pluginCypress from 'eslint-plugin-cypress';

export default defineConfig([
  // Configuração geral para arquivos JS/MJS/CJS
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },

  // Configuração específica para arquivos do Cypress
  {
    plugins: { cypress: pluginCypress },
    files: ['cypress/**/*.js'],
    extends: [pluginCypress.configs.recommended],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
      },
    },
    rules: {
      semi: 'error',
      'cypress/no-assigning-return-values': 'error',
      'cypress/no-unnecessary-waiting': 'error',
      'prefer-const': 'error',
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-force': 'warn',
      'cypress/no-async-tests': 'error',
      'cypress/no-pause': 'error',
    },
  },
]);
