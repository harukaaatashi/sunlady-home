import { Container } from '@/components/ui/container';
import Link from 'next/link';
import { company } from '@/lib/company';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50" role="contentinfo">
      <Container className="pt-16 pb-10 sm:pt-24 sm:pb-12">
        {/* 3カラム情報 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-5xl mx-auto">
          <div>
            <h2 className="text-xs font-medium tracking-[0.25em] uppercase text-foreground/60 pb-3 mb-5 border-b border-border">
              Company
            </h2>
            <address className="not-italic space-y-1.5 text-sm leading-relaxed text-foreground/80">
              <p>{company.name}</p>
              <p className="tabular-nums">{company.postalCode}</p>
              {company.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
          </div>

          <div>
            <h2 className="text-xs font-medium tracking-[0.25em] uppercase text-foreground/60 pb-3 mb-5 border-b border-border">
              Access
            </h2>
            <ul className="space-y-1.5 text-sm leading-relaxed text-foreground/80">
              {company.accessLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-medium tracking-[0.25em] uppercase text-foreground/60 pb-3 mb-5 border-b border-border">
              Contact
            </h2>
            <Link
              href={`mailto:${company.email}`}
              // DESIGN.md § 3.2: タップ領域 44px を py で確保する
              className="link-underline inline-flex items-center min-h-[44px] text-sm text-foreground/80 hover:text-primary transition-colors duration-200"
              aria-label="メールでのお問い合わせ"
            >
              {company.email}
            </Link>
          </div>
        </div>

        {/* 著作権 */}
        <div className="mt-16 sm:mt-24 pt-6 border-t border-border">
          <p className="text-center text-xs tracking-[0.2em] uppercase text-foreground/50">
            © {currentYear} Sunlady. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
