import {defineConfig} from 'eslint/config'
import js from '@eslint/js';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default defineConfig([
	js.configs.recommended,
	tseslint.configs.recommended,
	json.configs.recommended,
	markdown.configs.recommended,
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		plugins: { js },
	},
	{
		files: ['**/*.{ts,mts,cts,tsx}'],
		languageOptions: {
			parser: tseslint.parser,
		},
	},
	{
		files: ['**/*.json'],
		plugins: {
			json,
		},
		language: 'json/json',
	},
	{
		files: ['**/*.jsonc'],
		plugins: { json },
		language: 'json/jsonc',
	},
	{
		files: ['**/*.md'],
		plugins: { markdown },
		language: 'markdown/gfm',
	},
	{
		files: [
			'**/*.js',
			'**/*.ts',
		],
		...stylistic.configs.customize({
			indent: 4,
			quotes: 'single',
			semi: true,
			jsx: true,
			commaDangle: 'always-multiline',
		}),
	},
	{
		plugins: {
			'import': importPlugin,
			'unused-imports': unusedImports,
		},
		rules: {
			'no-unused-vars': 'error',
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],
		},
	},
	{
		ignores: ["package.json", "package-lock.json"]
	},
]);