module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    indent: ['error', 4],
    'space-before-function-paren': ['error', 'never'],
    'key-spacing': ['error', {
        beforeColon: true,
        afterColon: true,
        mode: 'minimum',
        align: {
            beforeColon: true,
            afterColon: true,
            on: 'colon'
        }
    }],
    semi: ['error', 'always'],
    'keyword-spacing': ['error', {
        before: true,
        after: true
    }],
    'brace-style': ['error', 'stroustrup']
  },
  globals: {}
}
