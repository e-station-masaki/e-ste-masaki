# E-ステ Masaki（エンタメステーション Masaki）

Number_i・JO1・BE:FIRST・Snow Man・BTS・Stray Kidsなど、日本・韓国アイドルのダンスを解説するアフィリエイトブログ。YouTubeチャンネルの補完サイトとして運営。

## ローカルで確認する方法

ビルド不要。`index.html` をブラウザで直接開くだけで確認できます。

```
e-ste-masaki/index.html をダブルクリック → ブラウザで開く
```

VS Codeを使っている場合は **Live Server** 拡張機能を使うと、ファイル保存のたびに自動リロードされて便利です。

## フォルダ構成

```
e-ste-masaki/
├── index.html              # トップページ
├── articles/
│   ├── index.html          # 記事一覧ページ
│   ├── template.html       # 記事HTMLテンプレート（コピーして使う）
│   └── number-i-dance-shoes.html  # 記事例
├── profile/
│   └── index.html          # プロフィールページ
├── contact/
│   └── index.html          # お問い合わせページ
├── css/
│   └── style.css           # 共通スタイル
├── js/
│   └── main.js             # 目次自動生成・ハンバーガーメニュー
└── .gitignore
```

## 新しい記事を追加する手順

1. `articles/template.html` をコピーして `articles/記事ファイル名.html` として保存
2. `<title>`・`<meta name="description">`・記事ヘッダー・本文を書き換える
3. `articles/index.html` を開き、`<!-- ここに新しいカードを追加する -->` の直下に記事カードのHTMLを追記する

```html
<!-- 記事カードのテンプレート（articles/index.html に追記） -->
<article class="card">
  <div class="card__thumb--placeholder">NO IMAGE</div>
  <!-- サムネイルがある場合: <img src="../images/xxx.jpg" alt="タイトル" class="card__thumb" /> -->
  <div class="card__body">
    <span class="card__category">カテゴリ名</span>
    <h2 class="card__title">
      <a href="/e-ste-masaki/articles/ファイル名.html">記事タイトル</a>
    </h2>
    <time class="card__date" datetime="2026-05-13">2026.05.13</time>
  </div>
</article>
```

4. トップページ（`index.html`）の「新着記事」セクションも必要に応じて更新する

## GitHub Pages への公開手順

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ユーザー名/e-ste-masaki.git
git push -u origin main
```

GitHubリポジトリの **Settings → Pages → Branch: main / root** を選択して Save。
数分後に `https://ユーザー名.github.io/e-ste-masaki/` で公開されます。

## 差し替えが必要なプレースホルダー

| プレースホルダー | 内容 |
|---|---|
| `GA_MEASUREMENT_ID` | Google Analytics の測定ID（例: G-XXXXXXXXXX） |
| `YOUR_VERIFICATION_CODE` | Google Search Console の確認コード |
| `YOUR_ASSOCIATE_ID` | AmazonアソシエイトのトラッキングアID |
| `https://www.youtube.com/@E-StationMasaki` | YouTubeチャンネルURL |
