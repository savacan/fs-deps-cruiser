# fs-deps-cruiser  
依存解析ツールのDependency-cruiserを使うサンプル。  
循環依存や不必要な依存を検出することでリファクタ対象を絞ることを目的とする。  

# usage  

開発用サーバ起動  

```
npm run dev
```

依存関係可視化

```
npm run depcruise:viz
```

# next  
configいじってみる。  
webpack,tsの設定ファイル決め打ちしてるので、うまいこと管理できるようにする。  
expressサーバの依存可視化。  