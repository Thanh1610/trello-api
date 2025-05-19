module.exports = {
    env: { es2020: true, node: true },
    extends: ['eslint:recommended', 'prettier'],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false,
        allowImportExportEverywhere: true,
    },
    plugins: ['prettier'],
    rules: {
        // Enable Prettier integration
        'prettier/prettier': [
            'warn',
            {
                arrowParens: 'always',
                bracketSpacing: true,
                insertPragma: false,
                printWidth: 120,
                proseWrap: 'preserve',
                quoteProps: 'as-needed',
                requirePragma: false,
                semi: true,
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'all',
                useTabs: false,
            },
        ],

        // Common ESLint rules
        'no-console': 1,
        'no-extra-boolean-cast': 0,
        'no-lonely-if': 1,
        'no-unused-vars': 1,
        'no-trailing-spaces': 1,
        'no-multi-spaces': 1,
        'no-multiple-empty-lines': 1,
        'space-before-blocks': ['error', 'always'],
        'object-curly-spacing': [1, 'always'],
        indent: ['warn', 4], // tabWidth = 4
        semi: [1, 'always'], // Prettier expects `semi: true`
        quotes: ['error', 'single'], // singleQuote: true
        'array-bracket-spacing': [1, 'never'], // Prettier enforces no spaces here
        'linebreak-style': 0,
        'no-unexpected-multiline': 'warn',
        'keyword-spacing': 1,
        'comma-dangle': [1, 'always'], // trailingComma: 'all'
        'comma-spacing': 1,
        'arrow-spacing': 1,
    },
};
