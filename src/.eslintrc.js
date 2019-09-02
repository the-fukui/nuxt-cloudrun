module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],

  // required to lint *.vue files
  plugins: ['vue'],

  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 0,
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-fallthrough': 0,
    'vue/no-unused-components':0,
    'no-irregular-whitespace':0,
    'require-atomic-updates':0,
  }
}