const baseConfig = require('configs/base')
const jestConfig = require('configs/jest')
const prettierConfig = require('configs/prettier')
const reactConfig = require('configs/react')
const merge = require('utils/merge')

module.exports = merge(baseConfig, jestConfig, reactConfig, prettierConfig)
