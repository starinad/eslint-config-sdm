import globals from 'globals';
import pluginJs from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
    // base js rules
    pluginJs.configs.recommended,

    // node environment
    {
        files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
        languageOptions: {
            sourceType: 'module',
            globals: {
                ...globals.es2024,
                ...globals.node,
            },
        },
    },

    // prettier integration
    prettier,

    // custom rules
    {
        rules: {
            'prettier/prettier': ['error', { singleQuote: true, tabWidth: 4 }],
            'linebreak-style': ['error', 'unix'],
            semi: ['error', 'always'],
        },
    },
];
