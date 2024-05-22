module.exports = {
    root: true,
    env: { browser: true, es2021: true },
    extends: ['next', 'airbnb', 'airbnb-typescript'],
    ignorePatterns: ['dist', '.eslintrc.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.eslint.json',
        sourceType: 'module'
    },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'import/no-absolute-path': 'off',
        'import/prefer-default-export': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
        'import/no-default-export': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/default-param-last': 'off',
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
            },
        ],
        'naming-convention': 'off'
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx'],
                path: ['src', 'node_modules'],
            },
        },
    },
};
