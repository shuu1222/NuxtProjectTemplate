const schemaJson = require('~shared/bff-introspection.json')

module.exports = {
  ignorePatterns: '!.eslintrc.js',
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    // `== null` は禁止
    'no-eq-null': 'error',
    // TypeScript のルールとバッティングする
    'import/extensions': ['error', {
      vue: 'always'
    }],

    // インポートの制限
    'no-restricted-imports': [
      'error',
      {
        // lodash-es の default import と chain メソッドの読込禁止(lodashを使う場合)
        // paths: [{
        //   name: 'lodash-es',
        //   importNames: ['default', 'chain']
        // }],
        // // 個別モジュールの default import 禁止
        // patterns: ['lodash-es/*'],
      },
    ],

    // prettier/vue で無効化された一部を復活させる
    'vue/html-self-closing': [
      'error',
      {
        html: {
          normal: 'any',
          void: 'any'
        },
      },
    ],
    'vue/multiline-html-element-content-newline': 'error',

    // dummy_ から始まる、もしくは _dummy_ を含む変数などを許可（あとで消す）
    camelcase: ['error', {
      allow: ['(^|_)dummy_']
    }],
  },
  settings: {
    // package.json に記載がないパッケージの import でエラーが出ないように
    'import/core-modules': [
      // Nuxt
      'vue',
      'vuex',
      '@vue/test-utils',
      // nuxt-typed-vuex
      'typed-vuex',
      // Amplify 関連を使用する場合コメントアウトを外す
      // '@aws-amplify/auth',
    ],
  },
  overrides: [{
      files: ['*.ts', 'app/**/*.vue'],
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/ban-ts-ignore': 'error',
        '@typescript-eslint/ban-types': 'error',
        camelcase: 'off',
        '@typescript-eslint/camelcase': ['error', {
          properties: 'never'
        }],
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/interface-name-prefix': 'error',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/no-this-alias': 'error',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',

        // 拡張予定のモジュールでもエラーになるので
        'import/prefer-default-export': 'off',
        // 空のコンストラクタを許可
        'no-useless-constructor': 'off',
        // クラスメソッドのオーバーロードでエラーにならない
        'no-dupe-class-members': 'off',

        // dummy_ から始まる、もしくは _dummy_ を含む変数などを許可（ダミーを使わない場合は消す＆後で消す）
        // eslint-disable-next-line no-dupe-keys
        '@typescript-eslint/camelcase': [
          'error',
          {
            allow: ['(^|_)dummy_', 'Dummy_']
          },
        ],
        '@typescript-eslint/class-name-casing': 'off', // eslint-disable-line no-dupe-keys
      },
    },
    {
      // テストファイルでは any などを許可する
      files: ['*.spec.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['app/models/**/*.ts'],
      rules: {
        'max-classes-per-file': ['error', 2],
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            classes: false
          },
        ],
      },
    },
    {
      // Vuex
      files: ['app/store/**'],
      rules: {
        // state の引数はプロパティの書き換えを可能
        'no-param-reassign': [
          'error',
          {
            props: true,
            ignorePropertyModificationsFor: ['state'],
          },
        ],
        // スコープ間で state という変数名の重複を許可
        'no-shadow': ['error', {
          allow: ['state']
        }],
      },
    },
    {
      files: ['mock-server/**', '*.stories.js'],
      rules: {
        'no-console': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true
          },
        ],
      },
    },
  ],
}
