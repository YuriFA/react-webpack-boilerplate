const aliasBase = require('../webpack/alias.js')

const alias = Object.keys(aliasBase).reduce(
  (acc, item) => ({
    ...acc,
    [`^${item}$`]: `${aliasBase[item]}`,
    [`^${item}/(.*)$`]: `${aliasBase[item]}/$1`,
  }),
  {},
)

const jestConfig = {
  bail: true,
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coverageDirectory: '<rootDir>/coverage',
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  // transform: {
  //   '^.+\\.js?$': 'babel-jest',
  // },
  moduleNameMapper: {
    '\\.(css|sss)$': 'jest-transform-css',
    ...alias,
  },
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['<rootDir>/config/tests/rtl.setup.js'],
}

module.exports = jestConfig
