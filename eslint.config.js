import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import angular from 'angular-eslint' // https://github.com/angular-eslint/angular-eslint/blob/main/packages/angular-eslint/src/configs/README.md
import { defineConfig } from 'eslint/config'
import prettier from 'eslint-plugin-prettier'

export default defineConfig([
  {
    files: ['**/*.ts'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    plugins: {
      prettier: prettier,
    },
    rules: { ...prettier.configs.recommended.rules },
  },
  {
    files: ['**/*.css'],
    plugins: {
      prettier: prettier,
    },
    rules: { ...prettier.configs.recommended.rules },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  },
])
