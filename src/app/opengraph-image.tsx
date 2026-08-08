import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { company } from '@/lib/company';

/**
 * サイト共通の OG 画像。ブランドネイビーに白ロゴだけを置く（DESIGN.md § 5.4）。
 *
 * ニュース詳細ページだけは記事のサムネイルを使う。
 * → src/app/news/[id]/page.tsx の generateMetadata を参照。
 */
export const alt = company.name;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// DESIGN.md § 2 の brand-navy（#1C2788）。
// ImageResponse は Tailwind トークンを解決できないため直値で持つ
const BRAND_NAVY = '#1C2788';

/**
 * hero-logo.svg を白single色に変換して data URI にする。
 *
 * 元の SVG は `<style>` 内のクラスで色を指定していて、
 * OG 画像のレンダラはその CSS を解釈しない。
 * style ブロックを外し、ルートの fill を白にすることで
 * （各 path は fill を持たないので）全体が白ロゴとして継承される。
 */
async function whiteLogoDataUri() {
  const raw = await readFile(join(process.cwd(), 'public', 'hero-logo.svg'), 'utf-8');
  const white = raw
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace('fill="none"', 'fill="#FFFFFF"');

  return `data:image/svg+xml;base64,${Buffer.from(white).toString('base64')}`;
}

export default async function OpengraphImage() {
  const logo = await whiteLogoDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: BRAND_NAVY,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={340} height={340} alt="" />
      </div>
    ),
    size,
  );
}
