const base = require('../base')
const react = require('../react')
const typescript = require('../typescript')
const typescriptReact = require('../typescript-react')

describe('Config', () => {
  it('base', () => {
    expect(base).toEqual({
      env: { node: true },
      parserOptions: { ecmaVersion: 2021, sourceType: 'module' },
      extends: [
        'eslint:recommended',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
      ],
      rules: { 'no-unused-vars': 'warn' },
    })
  })

  it('react', () => {
    expect(react).toEqual({
      env: { node: true },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      extends: [
        'eslint:recommended',
        'plugin:jest/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
      ],
      rules: { 'no-unused-vars': 'warn' },
      settings: { react: { version: 'detect' } },
    })
  })

  it('typescript', () => {
    expect(typescript).toEqual({
      env: { node: true },
      parserOptions: { ecmaVersion: 2021, sourceType: 'module' },
      extends: [
        'eslint:recommended',
        'plugin:jest/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
      ],
      rules: { 'no-unused-vars': 'warn' },
    })
  })

  it('typescript-react', () => {
    expect(typescriptReact).toEqual({
      env: { node: true },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      extends: [
        'eslint:recommended',
        'plugin:jest/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
      ],
      rules: { 'no-unused-vars': 'warn' },
      settings: { react: { version: 'detect' } },
    })
  })
})
