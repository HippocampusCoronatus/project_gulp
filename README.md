# Gulpタスク作成用プロジェクト

## 環境構築

Gulpを利用するためには[Node.js(以下、node)](https://nodejs.org/ja/)のインストールが必要。
プロジェクトごとに利用するnodeのバージョンを切り替えられるようにしておきたいのでWindowsでは[nodist](https://github.com/marcelklehr/nodist)やmacでは[nvm](https://github.com/creationix/nvm)を利用する。
nodeをインストールするとnpmコマンドが使えるようになる。

```
$ node -v
v8.9.1
$ npm -v
5.5.1
```

~~※いずれはnpmを[Yarn](https://yarnpkg.com/ja/)に切り替えたい。~~

nodeとnpmがインストールできたらgulpをグローバルインストールします。

```
$ npm install -g gulp
```

以下のコマンドでpackage.jsonに記載されているパッケージをインストールします。
package.jsonと同じディレクトリ階層でコマンド実行してください。
今後、package.jsonに変更があった場合、都度コマンド実行する必要があります。
※パッケージが多いと時間がかかります。

```
$ npm install
```

```
$ yarn install
```

gulpがグローバルとローカルにインストールされているのが確認できればOKです。

```
$ gulp -v
[13:43:21] CLI version 3.9.1
[13:43:21] Local version 3.9.1
```

## gulpタスク一覧

### gulp build

clean, copy, webpackの順にタスクを実行します。

### gulp clean

gulp/config.jsのclean.targetに指定しているディレクトリを削除します。

### gulp copy

gulp/config.jsのcopy.targetに指定しているファイルをcopy.destに指定しているディレクトリにコピーします。

### gulp webpack

gulp/config.jsのbuild.webpackに指定しているファイルをバンドルし、config.js.destに出力します。
