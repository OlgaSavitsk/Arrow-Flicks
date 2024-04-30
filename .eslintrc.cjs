module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: ['next/core-web-vitals', 'airbnb', 'airbnb-typescript'],
    ignorePatterns: '*.cjs',
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.eslint.json',
    },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'import/no-absolute-path': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-underscore-dangle': ['error', {allow: ['_id']}] 
    },
};
