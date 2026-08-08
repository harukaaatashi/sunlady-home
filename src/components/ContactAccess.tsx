import Link from 'next/link';
import { Container } from '@/components/ui/container';
import GoogleMap from '@/components/GoogleMap';
import { company } from '@/lib/company';

const labelClass = 'text-xs tracking-widest uppercase text-muted-foreground mb-1';
const valueClass = 'text-sm text-foreground/80';

/**
 * トップページの情報ブロック（DESIGN.md § 5.3）。
 *
 * 場所と連絡先が Footer まで到達しないと分からない状態だったため、
 * トップページ内に置く。値はすべて company.ts から参照する（CLAUDE.md § 2）。
 */
export default function ContactAccess() {
  return (
    <section id="access" className="py-12 sm:py-20 scroll-mt-20" aria-labelledby="access-heading">
      <Container>
        <h2
          id="access-heading"
          className="text-lg font-light tracking-widest uppercase text-foreground/80 mb-8"
        >
          Access
        </h2>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-6">
            <div>
              <p className={labelClass}>所在地</p>
              <p className={`${valueClass} leading-relaxed`}>
                <span className="tabular-nums">{company.postalCode}</span>
                <br />
                {company.addressLines.map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < company.addressLines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>

            <div>
              <p className={labelClass}>最寄り駅</p>
              <ul className={`${valueClass} space-y-1`}>
                {company.accessLines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className={labelClass}>営業時間</p>
                <p className={`${valueClass} tabular-nums`}>{company.businessHours}</p>
              </div>
              <div>
                <p className={labelClass}>定休日</p>
                <p className={valueClass}>{company.closedDays}</p>
              </div>
            </div>

            <div>
              <p className={labelClass}>お問い合わせ</p>
              <Link
                href={`mailto:${company.email}`}
                className="link-underline inline-flex items-center min-h-[44px] text-sm text-foreground/80 hover:text-primary transition-colors duration-200"
                aria-label="メールでのお問い合わせ"
              >
                {company.email}
              </Link>
            </div>
          </div>

          <GoogleMap />
        </div>
      </Container>
    </section>
  );
}
