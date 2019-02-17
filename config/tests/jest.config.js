// TODO: setup jest and rtl
// const aliasBase = require('../webpack/alias.js')

// const alias = Object.keys(aliasBase).reduce(
//   (acc, item) => ({
//     ...acc,
//     [`^${item}$`]: `${aliasBase[item]}`,
//     [`^${item}/(.*)$`]: `${aliasBase[item]}/$1`,
//   }),
//   {},
// )

// const jestConfig = {
//   automock: false,
//   browser: false,
//   bail: false,
//   collectCoverageFrom: [
//     'src/**/*.{js,jsx}',
//     '!**/node_modules/**',
//     '!**/vendor/**',
//   ],
//   coverageDirectory: '<rootDir>/coverage',
//   moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
//   transform: {
//     '^.+\\.js?$': 'babel-jest',
//   },
//   setupFiles: ['./scripts/configs/jestsetup.js'],
//   setupTestFrameworkScriptFile: 'jest-enzyme',
//   testEnvironment: 'enzyme',
//   moduleNameMapper: { ...alias },
//   moduleDirectories: ['node_modules'],
//   verbose: true,
// }

module.exports = {}
