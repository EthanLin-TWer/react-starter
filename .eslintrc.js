module.exports = {
  root: true,
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
  },
  extends: [
    'prettier',
    'javascript-the-good-parts',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'unused-imports', 'simple-import-sort'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-brace-presence': ['error', 'never'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    'class-methods-use-this': 'warn',
    'prefer-destructuring': 'warn',
    'no-shadow': 'warn',

    // complaining in src/hooks/api/query-client.ts#1, should be library type definition export error
    '@typescript-eslint/ban-ts-comment': 'warn',

    // complaining in src/index.tsx#18
    'consistent-return': 'warn',

    // set of no-unused-vars related rules: unused-imports plugin manages the no-unused-vars rule itself
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': 'warn',

    // rules managed by simple-import-sort that handles import order auto fixes
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // https://github.com/lydell/eslint-plugin-simple-import-sort/blob/main/examples/.eslintrc.js#L74-L93

          // Node.js builtins.
          [`^(${require('module').builtinModules.join('|')})(/|$)`],

          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],

          // Internal packages.
          ['^(routes|@)(/.*|$)'],

          // Side effect imports.
          ['^\\u0000'],

          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },
}
