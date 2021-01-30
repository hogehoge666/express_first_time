# はじめてのExpress.js

Express.jsの初心者向け講座の写経です。

---

## v0.1

- プロジェクトフォルダ作成
- npm init
- npm install express
- 適当な文字列を返す

---

## v0.2

- index.htmlを返す

---

## v0.3

- req.paramsでリソース名を可変にする

---

## v0.4

- req.queryでGETクエリを受けとりconsoleに出力

```
http://localhost:3000/?name=hoge
```

---

## v0.5

- req.bodyでPOSTの入力フォームの内容を受けとりconsoleに出力

---

## v0.6

- /apiでjsonを返信

```
http://localhost:3000/api
```

---

## v0.7

- グローバル変数でオンメモリのカウンタを実装
- サーバを再起動するとリセットされる

```
http://localhost:3000/count
http://localhost:3000/reset
```
