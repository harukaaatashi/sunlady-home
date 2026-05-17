# CLAUDE.md — Sunlady Home

このファイルは、AI / 開発者がこのリポジトリで作業するときの **ルールと前提**
をまとめたもの。タスクに着手する前に必ず読むこと。

---

## § 1 デザインの正典

`DESIGN.md` を**唯一の正**とする。色・余白・タイポグラフィ・アニメーションは
すべて DESIGN.md に従う。新しいルールが必要なときは、**実装より先に DESIGN.md
を更新**する。

---

## § 2 会社情報は `src/lib/company.ts` に集約

メール / 住所 / 営業時間 / 設立日などの会社情報は **`src/lib/company.ts`
の `company` オブジェクトが唯一の情報源**。

### やること
- 値を変えるときは `src/lib/company.ts` だけ書き換える
- 各コンポーネントは `import { company } from '@/lib/company'` で参照

### やってはいけないこと
- 住所・メールをコンポーネントにハードコードで書く
- 「Footer だけ更新して About を忘れる」事故の元

現在使用箇所: `Footer.tsx` / `AboutContent.tsx` / `GoogleMap.tsx` /
`Navigation.tsx`

---

## § 3 ブランド固定色（テーマで反転しない色）

`--primary` トークンはダークモードで白寄りに反転する。ブランド由来の
**ヒーローやロゴ背景は反転してはいけない**ので、固定色を使う。

| 用途 | 使う色 | 例 |
|---|---|---|
| ヒーロー背景・常にブランドネイビーが必要な箇所 | `brand-navy`（Tailwind トークン） | `bg-gradient-to-br from-brand-navy to-brand-navy/70` |
| 一般的な強調・テーマ連動 | `primary` | `bg-primary` |
| エラー・警告・CTA の差し色 | `brand-red` | `text-brand-red` |

`brand-navy` / `brand-red` は `tailwind.config.ts` に定義済み。

---

## § 4 画像未設定時のフォールバック

ニュース画像が未設定の場合、**Sunlady ロゴ（白）をネイビー背景に表示**する
フォールバックを使う。空グレー枠は禁止。

実装箇所: `NewsCard.tsx` / `HomeContent.tsx`（ホームのニュースリスト）

詳細ページ（`news/[id]/page.tsx`）は画像なしならエリアごと非表示で OK。

---

## § 5 カードを揃える

グリッドに並ぶカードは**列内で高さを揃える**。具体的には:
- カード本体: `h-full`
- カード内コンテンツ: `flex flex-col` + 必要に応じて `flex-1`
- 画像エリア: 常に `aspect-video`（ニュース）/ `aspect-[4/3]`（パートナー）を
  確保（画像未設定でも枠は維持）

これで CMS にどんなサイズの画像をアップロードしてもカードの高さが
バラつかない。

---

## § 6 ISR キャッシュは 60 秒

`revalidate = 60` で全ページ統一。microCMS 更新が最大 60 秒で反映される。

これより長くしない（更新が反映されないクレームになる）。
これより短くしない（負荷の意味がない）。

---

## § 7 余白とレイアウト

- 縦パディング: 全ページ `py-12 sm:py-20`（モバイル 48px / デスクトップ 80px）
- 横: `<Container>` (`max-w-7xl` + `px-4 sm:px-6 lg:px-8`) で統一
- ページタイトルは英字 uppercase + `tracking-widest` + `font-light` の
  ミニマル見出しスタイル（例: `News`, `Partners`, `About`）

---

## § 8 自動化された運用

| 機能 | 設定箇所 | 動作 |
|---|---|---|
| Dependabot | `.github/dependabot.yml` | 週次で依存パッケージ更新 PR |
| 自動マージ | `.github/workflows/dependabot-auto-merge.yml` | patch/minor は CI 通過後に自動 merge、major は手動 |
| セキュリティ監査 | `.github/workflows/security-scan.yml` | 週次で `npm audit`、high+ の脆弱性が出たら Issue 起票 |
| ブランチ保護 | GitHub Ruleset「main protection」 | main への直 push は `security-audit` 必須 |

---

## § 9 SEO

- `<title>` と `<meta description>` は `src/app/layout.tsx` の metadata
  template + `src/app/page.tsx` で会社名フルネームを使う
- ロゴ画像の `alt` 属性に「Sunlady ロゴ」のような文字列を入れない
  → Google が title 候補として拾ってしまう。会社名を入れる

---

## § 10 commit メッセージ

- 日本語で簡潔に
- 1行目: 何をしたか（30〜50文字）
- 空行
- 本文: なぜそれが必要だったか、影響範囲、後続のフォロー
- 末尾に `Co-Authored-By: Claude Sonnet ... <noreply@anthropic.com>`

---

## § 11 git アカウント

リモートは `spago-official/sunlady-home`。

push 時に「Permission denied」になったら `gh auth status` で確認し、
必要に応じて `gh auth switch -u spago-official` でアカウント切り替え。
