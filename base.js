const baseConfig = require('./configs/base')
const jestConfig = require('./configs/jest')
const prettierConfig = require('./configs/prettier')
const merge = require('./utils/merge')

module.exports = merge(baseConfig, jestConfig, prettierConfig)
