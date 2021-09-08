# TODO: project名をここに記載

## ローカル起動方法
### 初回
``` bash
# パッケージインストール
$ npm install
```

### 動作確認だけの場合
``` bash
# 1. モックサーバー起動
$ npm run mock (選定が決まったら左コマンドで起動できるように設定)

# 2. 開発サーバー起動 -> 表示された URL をブラウザで開く
$ npm run dev
```

### コードを修正する場合
``` bash
# 1. モックサーバー起動
$ npm run mock:watch (選定が決まったら左コマンドで起動できるように設定)

# 2. 開発サーバー起動 -> 表示された URL をブラウザで開く
$ npm run dev
```

## 使用ライブラリ・フレームワーク
- [Nuxt.js](https://ja.nuxtjs.org/)
  - ESLint
  - Prettier
  - TypeScript
  - [Vue.js](https://jp.vuejs.org/)
  - [Vue Router](https://router.vuejs.org/ja/)
  - [Vuex](https://vuex.vuejs.org/ja/)
  - [vue-test-utils](https://vue-test-utils.vuejs.org/ja/)
  - [Jest](https://jestjs.io/ja/)
  - [@nuxtjs/composition-api](https://composition-api.nuxtjs.org/)
    Vue 3.0 から加わる新しい API を使えるようにするプラグイン
  - [nuxt-typed-vuex](https://nuxt-typed-vuex.roe.dev/)
    Vuex 型付支援
  - [client]()
     クライアント⇒決まったら追加　多分Axios

## アーキテクチャ
Nuxt をベース、インフラ層やドメイン層を追加。

