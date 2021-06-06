# Configurations

## default

### extends

- eslint:recommended
- plugin:jest/recommended
- plugin:prettier/recommended

### rules

- no-unused-vars: `warn`

## react

### extends

- plugin:react/recommended
- plugin:react-hooks/recommended

## typescript

### extends

- plugin:@typescript-eslint/recommended
- plugin:@typescript-eslint/recommended-requiring-type-checking

## typescript-react

### extends

- plugin:react/recommended
- plugin:react-hooks/recommended
- plugin:@typescript-eslint/recommended
- plugin:@typescript-eslint/recommended-requiring-type-checking