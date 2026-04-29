# DESIGN.md — Sunlady Home

> このファイルがデザインの唯一の正とする。実装前に必ず参照し、ここに無いルールが必要になったら先にここを更新する。

---

## § 1 Visual Theme

| 項目 | 値 |
|---|---|
| プロファイル | Corporate Landing |
| スタイル | Trust & Authority — エレガントミニマル |
| ムード | 上品・温かな人とのつながり・ファッション |
| コンテンツ言語 | 日本語中心 |
| 対象端末 | 両対応（モバイルファースト） |
| ダークモード | あり |

---

## § 2 Color Tokens

### ロゴ由来のブランドカラー

| Token | Light (HSL) | Dark (HSL) | Hex 参考 |
|---|---|---|---|
| `--primary` | `234 66% 32%` | `210 40% 96%` | #1C2788 (navy) |
| `--primary-foreground` | `0 0% 100%` | `234 66% 32%` | white / navy |
| `--brand-red` | `355 100% 45%` | `355 100% 60%` | #E60012 (accent) |

### Semantic Tokens

| Token | Light | Dark | 用途 |
|---|---|---|---|
| `--background` | `0 0% 100%` | `234 50% 8%` | ページ背景 |
| `--foreground` | `234 30% 12%` | `210 40% 96%` | 本文テキスト |
| `--card` | `0 0% 100%` | `234 40% 12%` | カード背景 |
| `--card-foreground` | `234 30% 12%` | `210 40% 96%` | カード内テキスト |
| `--muted` | `220 14% 96%` | `234 35% 16%` | 薄い背景 |
| `--muted-foreground` | `220 8% 46%` | `220 10% 60%` | 補足テキスト |
| `--accent` | `234 30% 94%` | `234 35% 20%` | ホバー背景など |
| `--border` | `220 13% 91%` | `234 30% 22%` | ボーダー |
| `--ring` | `234 66% 32%` | `210 40% 80%` | フォーカスリング |
| `--destructive` | `355 100% 45%` | `355 100% 60%` | エラー・警告 |

### 禁止事項

- hex 直書き禁止（`from-[#1a237e]` のような Tailwind arbitrary value も不可）
- ブランドカラー以外の色の新規追加は DESIGN.md 更新後のみ許可

---

## § 3 Typography

| 用途 | フォント | Weight |
|---|---|---|
| 見出し (h1–h3) | Noto Sans JP | 300–500 |
| 本文 | Noto Sans JP / Inter | 400 |
| 英字装飾 | Inter | 300 |

- 本文行間: `1.7`（現状維持）
- 禁則処理: `word-break: keep-all` 適用
- 数値列: `font-variant-numeric: tabular-nums`
- 最小フォントサイズ: 14px（モバイル）/ 16px（デスクトップ）

---

## § 4 Component States

すべてのインタラクティブコンポーネントに以下の状態を実装する。

| State | 実装方針 |
|---|---|
| default | token のデフォルト値 |
| hover | `hover:opacity-90` または `hover:bg-accent` |
| active / pressed | `active:scale-[0.98]` |
| focus-visible | `focus-visible:ring-2 focus-visible:ring-ring` |
| disabled | `opacity-50 cursor-not-allowed pointer-events-none` |

- transition は必ずプロパティを明示: `transition-colors duration-200` / `transition-opacity duration-200`
- `transition-all` 禁止

---

## § 5 Spacing & Layout

- スペーシングスケール: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96px（Tailwind デフォルト準拠）
- コンテナ最大幅: `max-w-7xl`
- セクション縦パディング: `py-12 sm:py-24`
- ヒーロー高さ: `h-[60vh] sm:h-[80vh] min-h-[400px] sm:min-h-[600px]`

---

## § 6 Animation

- duration: 150–300ms
- easing: `ease-out`（enter）/ `ease-in`（exit）
- transform / opacity のみアニメーション（width・height 禁止）
- `prefers-reduced-motion` 対応必須

---

## § 7 Do's / Don'ts

### Do
- ロゴカラー（ネイビー・レッド）を semantic token 経由で使う
- 余白を広めに取り、上品な印象を保つ
- ヒーローのグラデーションは `from-primary to-primary/80` などトークンベースで
- アクセントカラー（`--brand-red`）は CTA・強調ポイントのみに絞る

### Don't
- hex 直書き・arbitrary value による色指定
- `transition-all` の使用
- emoji をアイコンとして使用
- ダークモードの検証を省略する
- ブランド以外の新色を無断追加する

---

## § 8 Dark Mode

- ダークモードはクラスベース（`class` strategy）
- 背景は深いネイビー（`hsl(234 50% 8%)`）— 黒ではなくブランドと連動した色
- ロゴ: `dark:brightness-0 dark:invert` でモノクロ白抜き（現状維持）
- ヒーロー: ダーク時も視認性を保つ（グラデーション opacity 調整）

---

## § 9 Agent Prompt Guide

このプロジェクトで UI を変更するとき、AIへの指示に含めること:

```
DESIGN.md を読み、§2 のトークンのみを使って実装する。
hex 直書き・transition-all・任意の新色追加は禁止。
実装後は §4（states）と §7（Do/Don't）で self-review し、準拠確認済みとして完成を報告する。
```
