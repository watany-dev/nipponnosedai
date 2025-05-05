# 日本の世代・元号検索アプリ

このプロジェクトは、西暦年から日本の元号、干支、世代情報を検索できるウェブアプリケーションです。

## 機能

- 西暦年を入力すると、以下の情報を表示します：
  - 元号（和暦）：該当する日本の元号と年数
  - 干支：その年の干支（例：甲子）
  - 世代名：該当する日本の世代名称（例：団塊の世代、ゆとり世代）
  - 生年範囲：その世代の主な出生年範囲
  - 世代の特徴：該当世代の社会的・文化的特徴

## 技術スタック

- **フロントエンド**：Vite + React + TypeScript
- **フォーマッター**：Biome
- **テストフレームワーク**：Vitest
- **デプロイ**：Cloudflare Workers
- **CI/CD**：GitHub Actions

## プロジェクト構造

```
nipponnosedai/
├── src/
│   ├── components/
│   │   ├── YearInput.tsx     # 年入力コンポーネント
│   │   └── ResultDisplay.tsx # 結果表示コンポーネント
│   ├── utils/
│   │   ├── eraConverter.ts   # 元号変換ユーティリティ
│   │   ├── etoCalculator.ts  # 干支計算ユーティリティ
│   │   └── generationInfo.ts # 世代情報ユーティリティ
│   ├── App.tsx              # メインアプリケーション
│   ├── App.css              # スタイル
│   └── main.tsx             # エントリーポイント
├── tests/                   # テストファイル
├── index.html               # HTMLテンプレート
├── package.json             # 依存関係
├── tsconfig.json            # TypeScript設定
└── vite.config.ts           # Vite設定
```

## 開発方法

1. リポジトリをクローン：
   ```
   git clone https://github.com/yourusername/nipponnosedai.git
   cd nipponnosedai
   ```

2. 依存関係をインストール：
   ```
   npm install
   ```

3. 開発サーバーを起動：
   ```
   npm run dev
   ```

4. テストを実行：
   ```
   npm test
   ```

## デプロイ

このプロジェクトはCloudflare Workersにデプロイされます。GitHub Actionsを使用して、mainブランチへのプッシュ時に自動的にデプロイされます。

## ライセンス

このプロジェクトはISCライセンスの下で公開されています。
