const { ESLint } = require('eslint')
const baseConfig = require('../configs/base')
const prettierConfig = require('../configs/prettier')
const merge = require('../utils/merge')

describe('ESLint', () => {
  it('base', async () => {
    const eslint = new ESLint({
      useEslintrc: false,
      baseConfig: merge(baseConfig, prettierConfig),
    })

    const [res] = await eslint.lintText('const a = 10\na = 20')

    expect(res.errorCount).toBe(3)
  })
})
