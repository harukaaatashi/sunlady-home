import { ImageResponse } from 'next/og';
import { company } from '@/lib/company';

/**
 * OG 画像を静的アセットではなくコードから生成する。
 *
 * 従来 metadata が参照していた `/og-image.jpg` は public に存在せず、
 * URL を共有してもサムネイルが出ない状態だった（DESIGN.md § 0.3）。
 * 画像素材が用意できない運用制約（§ 0.2）に合わせ、
 * ブランドカラーとタイポグラフィだけで組み立てる。
 */
export const alt = company.name;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// DESIGN.md § 2 の brand-navy（#1C2788）。ImageResponse は Tailwind トークンを解決できないため直値で持つ
const BRAND_NAVY = '#1C2788';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: BRAND_NAVY,
          color: '#FFFFFF',
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 300,
            letterSpacing: '0.2em',
            textAlign: 'center',
          }}
        >
          FASHION DIRECT
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 500,
            letterSpacing: '0.16em',
            marginTop: 16,
          }}
        >
          SUNLADY
        </div>
        <div
          style={{
            fontSize: 30,
            opacity: 0.75,
            letterSpacing: '0.24em',
            marginTop: 56,
          }}
        >
          TOKYO EBISU / SINCE 1971
        </div>
      </div>
    ),
    size,
  );
}
