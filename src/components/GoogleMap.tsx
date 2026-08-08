import { company } from '@/lib/company';

/**
 * 会社所在地の埋め込み地図。
 *
 * DESIGN.md § 5.3 / CLAUDE.md § 2:
 * 住所は company.ts のみを情報源とし、埋め込み URL もそこから組み立てる。
 * （以前は座標と住所が直書きされており、実際とは違う地名を指していた）
 */
export default function GoogleMap() {
  const query = encodeURIComponent(company.addressFull);
  const embedSrc = `https://maps.google.com/maps?q=${query}&hl=ja&z=17&output=embed`;
  const externalHref = `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <div className="space-y-2">
      {/*
        遅延読み込みは iframe の loading="lazy" に任せる。
        以前は IntersectionObserver で src を差し込んでいたが、
        ブラウザ標準で足りるうえ、観測が動かない環境では地図が出ないままになる。
      */}
      <div className="aspect-[16/9] w-full border border-border bg-muted">
        <iframe
          src={embedSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${company.name}の所在地`}
        />
      </div>
      {/*
        以前は地図全体が onClick の div で、キーボードでは開けなかった。
        外部リンクは独立したリンクとして置く（DESIGN.md § 5.3）。
      */}
      <a
        href={externalHref}
        target="_blank"
        rel="noopener noreferrer"
        className="link-underline inline-flex items-center min-h-[44px] text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
      >
        Google Maps で開く
      </a>
    </div>
  );
}
