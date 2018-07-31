module.exports = {
    root: true,
    // parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'module',
      ecmaFeatures: {
        'experimentalObjectRestSpread': true,
        'impliedStrict': true,
        'classes': true
      },
    },
    env: {
      browser: true,
      node: true
    },
    extends: ['standard', 'plugin:vue/recommended'],
    globals: {
      __static: true
    },
    plugins: ['vue', 'html'],
    'rules': {
      // allow paren-less arrow functions
      'arrow-parens': 0,
      // allow async-await
      'generator-star-spacing': 0,
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      'vue/max-attributes-per-line': [
        2,
        {
          'singleline': 3,
          'multiline': {
            'max': 1,
            'allowFirstLine': false
          }
        }
      ]
    }
  }
  