// I'd like to name this eslint.config.js as suggested by the documentation but NextJS doesn't support it

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['next/core-web-vitals', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    //quotes: ['error', 'single'],
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ]
  }
}
