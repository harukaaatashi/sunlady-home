# sunlady-home

株式会社ファッション ディレクト サンレディの公式ウェブサイト。

## 技術スタック

| 用途 | 技術 |
|---|---|
| フレームワーク | Next.js 15 (App Router) |
| 言語 | TypeScript |
| スタイル | Tailwind CSS + shadcn/ui |
| CMS | microCMS |
| ホスティング | Netlify |
| エラー監視 | Sentry |

## ページ構成

- `/` — トップ（最新ニュース・パートナー一覧）
- `/news` — ニュース一覧
- `/news/[id]` — ニュース詳細
- `/about` — 会社概要
- `/partners` — パートナー一覧

## ローカル開発

```bash
npm install
npm run dev
```

`http://localhost:3000` で確認できます。

### 環境変数

`.env.local` を作成して以下を設定してください。

```
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

## デプロイ

main ブランチへの push で Netlify が自動デプロイします。

Node.js バージョンは `netlify.toml` で 18 に固定されています。

## CI / セキュリティ

| ワークフロー | タイミング | 内容 |
|---|---|---|
| security-scan | push / PR / 毎週日曜 | npm audit・lint・型チェック |
| security-audit | 毎月1日 | npm audit・outdated チェック |
| Dependabot | 毎週月曜（npm）/ 毎月（Actions） | 依存パッケージの自動更新 PR |

脆弱性が検出された場合は Issue が自動で作成されます。Dependabot の PR をマージするだけで依存関係を最新に保てます。
