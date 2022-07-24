module.exports = {
  env: {
    node: true,
  },
  extends: [
    // '@antfu',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    './.eslintrc-auto-import.json',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  // Ignore auto-generated GraphQL code
  ignorePatterns: [
    'src/generated/*',
    './dist/*',
    './.eslintrc-auto-import.json',
    './graphql.schema.json'
  ],
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    // 'no-undef': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/object-curly-spacing': [2, 'always'],
    'vue/html-closing-bracket-spacing': [
      2,
      {
        selfClosingTag: 'always',
      },
    ],
    'vue/prop-name-casing': 'off',
    // 'vue/max-attributes-per-line': [
    //   2,
    //   {
    //     singleline: {
    //       max: 1,
    //     },
    //     multiline: {
    //       max: 1,
    //     },
    //   },
    // ],
  },
}
