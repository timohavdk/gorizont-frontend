import css from '@eslint/css';
import { defineConfig, globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import commonConfig from 'linters';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
    ...commonConfig,
    ...nextVitals,
    globalIgnores([
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ]),
    {
        files: ['src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    {
        files: ['**/*.css'],
        plugins: { css },
        language: 'css/css',
        extends: ['css/recommended'],
    },
    {
        plugins: {
            'import': importPlugin,
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'no-unused-vars': 'off',
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                    ],
                    pathGroups: [
                        {
                            pattern: '{react,zod,swr}',
                            group: 'external',
                            position: 'before',
                        },
                        {
                            pattern: '@/**',
                            group: 'internal',
                            position: 'after',
                        },
                        {
                            pattern: '*.+(css|scss)',
                            group: 'index',
                            position: 'after',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['builtin'],
                    alphabetize: {
                        order: 'asc',
                    },
                },
            ],
        },
    },
]);
