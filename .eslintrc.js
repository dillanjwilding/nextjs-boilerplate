module.exports = {
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
