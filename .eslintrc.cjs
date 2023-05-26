module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  globals: {
    cy: true,
  },
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'module',
  },
  parser: '@babel/eslint-parser',
  extends: [
    'airbnb-base',
    'plugin:cypress/recommended',
  ],
  rules: {
    'no-unused-vars': 'warn',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 1,
    }],
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'no-sparse-arrays': 'off',
    'no-unused-expressions': 'warn',
    'no-alert': 'warn',
    'max-len': ['warn', {
      code: 120,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
    }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false,
    }],
    'class-methods-use-this': 'off',
  },
};
