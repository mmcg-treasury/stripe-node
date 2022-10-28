module.exports = {
  env: {
    mocha: true,
  },
  plugins: ['chai-friendly'],
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  rules: {
    'sort-imports': 'off',
    'no-loop-func': 'off',
    'no-sync': 'off',
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2,
  },
};
