import globals from 'globals';
import pluginJs from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
    {
        files: ['*.js', '*.mjs', '*.cjs'],
        languageOptions: {
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.es2024,
            },
        },
    },
    pluginJs.configs.recommended,
    prettier,
    {
        rules: {
            'prettier/prettier': ['error', { singleQuote: true, tabWidth: 4 }],
            'linebreak-style': ['error', 'unix'],
            semi: ['error', 'always'],
        },
    },
];
