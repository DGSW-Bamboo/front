module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      excludedFiles: ['*.js', '*.jsx'],
      rules: {
        'no-console': 'off',
        'no-restricted-syntax': [
          'error',
          {
            selector:
              "CallExpression[callee.object.name='console'][callee.property.name=/^(log|warn|error|info|trace)$/]",
            message: `@29cm/utils/log 를 사용해주세요.\n\ne.g.\nimport { logInfo } from '@29cm/utils/log';\nlogInfo(message);`,
          },
        ],
        'no-continue': 'off',
        'class-methods-use-this': 'off',
        'import/extensions': 'off',
        'import/no-named-as-default': 'off',
        'import/prefer-default-export': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        'react/destructuring-assignment': 'off',
        'react/prop-types': 'off',
        'react/jsx-boolean-value': 'off',
        'react/jsx-wrap-multilines': 'off',
        'react/no-array-index-key': 'warn',
        'react/require-default-props': 'off',
        'react/sort-comp': 'off',
        'react/state-in-constructor': 'off',
        'react/static-property-placement': 'off',
        'require-await': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-use-before-define': [
          'warn',
          { 'functions': false, 'classes': false, 'variables': false, 'typedefs': false }
        ],
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'interface',
            format: ['PascalCase'],
          },
        ],
        // It's not accurate in the monorepo style
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'spaced-comment': ['error', 'always', { markers: ['/'] }],
      },
    },
    {
      files: ['tools/**/*.js'],
      rules: {
        'global-require': 'off',
      },
    },
  ],
};
