import commonConfig from 'linters';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	...commonConfig,
	{
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
            },
        },
    },
	{
		ignores: ["nest-cli.json"]
	},
]);
