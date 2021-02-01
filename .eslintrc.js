module.exports = {
  root: true,
  // parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    // add more generic rulesets here, such as:
    'plugin:prettier/recommended', // turns off all ESLINT rules that are unnecessary due to Prettier or might conflict with Prettier.
    'plugin:vue/recommended', // /base, /essential, /strongly-recommended, /recommended
    'prettier/vue',
    'prettier/standard',
  ],
  globals: {
    __static: true,
  },
  plugins: ['html', 'simple-import-sort', 'prettier', 'vue'],
  rules: {
    'simple-import-sort/sort': 'error',
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // "max-depth": [1, 3],
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'object-curly-spacing': [2, 'always'],
    'max-len': [
      'warn',
      {
        code: 120,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'vue/max-attributes-per-line': 'off',
  },
}
