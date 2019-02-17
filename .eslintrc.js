const alias = require('./config/webpack/alias')

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: [
    'import',
    'react',
    'jsx-a11y',
    'prettier',
    'standard',
    'react-hooks',
  ],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true,
    jest: true,
  },
  rules: {
    indent: ['error', 2],
    'space-before-function-paren': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': 'off',
    'global-require': 'off',
    semi: 'off',
    'arrow-body-style': 'off',
    'no-multiple-empty-lines': ['warn', { max: 1 }],
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',
  },

  // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: alias,
          },
        },
      },
    },
  },
}
