# typescript-study

TypeScript の文法・型システムを段階的に学べる、対話型のクイズ Web アプリです。

- **媒体**: Web アプリ（PWA 対応 → iPhone でもホーム画面追加で疑似ネイティブ風に使用可能）
- **ホスト**: GitHub Pages（完全無料・期限なし）
- **保存先**: 学習履歴はブラウザの `localStorage`（サーバ不要）
- **依存サービス費用**: なし

公開 URL（デプロイ後）: `https://usuiatsushi.github.io/typescript-study/`

## 要件定義

### 機能要件
1. カテゴリ別の出題（基本型 / インターフェース / ジェネリクス / ユーティリティ型 / 高度な型）
2. 4択クイズ形式、回答後に解説を表示
3. セッション単位での正答数スコアリング
4. 学習履歴の永続化（最新50件）
5. PWA としてホーム画面に追加可能

### 非機能要件
- 外部 API・有料サービスを使用しない
- Node 18+ で動作、TypeScript `strict` モード
- iPhone Safari / Chrome / Edge / Firefox の最新版で動作

## 技術スタック

| レイヤ | 採用 | 理由 |
| --- | --- | --- |
| 言語 | TypeScript 5 | 学習対象そのもの |
| UI | React 18 + Vite | 設定がシンプル・ビルドが高速 |
| スタイル | プレーン CSS | 追加依存なし |
| 永続化 | `localStorage` | サーバ不要 |
| ホスティング | GitHub Pages | 無料・無期限 |
| CI/CD | GitHub Actions | 無料枠で完結 |

## ディレクトリ構成

```
src/
├── types/index.ts        # ドメイン型
├── data/questions.ts     # 問題データ
├── lib/
│   ├── quiz.ts           # 出題ロジック
│   └── storage.ts        # 履歴の保存/読込
├── components/
│   ├── Home.tsx
│   ├── Quiz.tsx
│   ├── Result.tsx
│   └── History.tsx
├── App.tsx
├── main.tsx
└── styles.css
public/
├── manifest.webmanifest  # PWA マニフェスト
└── icon.svg              # アイコン
.github/workflows/deploy.yml  # GitHub Pages 自動デプロイ
```

## ローカル開発

```bash
npm install
npm run dev      # http://localhost:5173/typescript-study/
npm run build    # 本番ビルド (dist/)
npm run preview  # ビルド結果のローカルプレビュー
npm run typecheck
```

## デプロイ手順（初回のみ）

1. GitHub リポジトリ → **Settings → Pages**
2. **Source** を `GitHub Actions` に設定
3. `main` ブランチへ push すると、`.github/workflows/deploy.yml` が自動でビルド & デプロイ
4. 数分後に `https://<user>.github.io/typescript-study/` で公開

## iPhone でのインストール（PWA）

1. 公開 URL を **Safari** で開く
2. 共有ボタン → 「ホーム画面に追加」
3. アイコンから起動するとフルスクリーンで動作

## 問題追加の方法

`src/data/questions.ts` の `QUESTIONS` 配列にエントリを追加するだけです。型は `src/types/index.ts` の `Question` を参照してください。
