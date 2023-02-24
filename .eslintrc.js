module.exports = {
    extends: [
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {

        quotes: [2, 'single'],
        indent: [2, 4],
        'semi': [2, 'always'],
        'max-len': [2, 200],
        'jsx-quotes': [2, 'prefer-single'],
        'comma-dangle': [1, 'always-multiline'],
        'object-curly-spacing': [2, 'always'],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies':'off',
    },
};
