module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    semi: [2, 'never'],
    'no-console': 'off',
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': ['error', { semi: false, singleQuote: true, printWidth: 120 }],
    'no-unused-vars': 'off',
    'import/named': 'off',
  },
}
