import { Container } from '@/components/ui/container';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50" role="contentinfo">
      <Container className="pt-16 pb-10 sm:pt-24 sm:pb-12">
        {/* 3カラム情報 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-5xl mx-auto">
          <div>
            <h2 className="text-[11px] font-medium tracking-[0.25em] uppercase text-foreground/60 pb-3 mb-5 border-b border-border">
              Company
            </h2>
            <address className="not-italic space-y-1.5 text-sm leading-relaxed text-foreground/80">
              <p>株式会社 ファッション ディレクト サンレディ</p>
              <p className="tabular-nums">〒150-0021</p>
              <p>東京都渋谷区恵比寿西 1-32-11</p>
              <p>ヴァイスハイム 3F</p>
            </address>
          </div>

          <div>
            <h2 className="text-[11px] font-medium tracking-[0.25em] uppercase text-foreground/60 pb-3 mb-5 border-b border-border">
              Access
            </h2>
            <ul className="space-y-1.5 text-sm leading-relaxed text-foreground/80">
              <li>東急東横線 代官山駅 徒歩約 3 分</li>
              <li>JR 山手線 恵比寿駅 徒歩約 4 分</li>
              <li>東京メトロ日比谷線 恵比寿駅 徒歩約 4 分</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-medium tracking-[0.25em] uppercase text-foreground/60 pb-3 mb-5 border-b border-border">
              Contact
            </h2>
            <Link
              href="mailto:sunaldy2@bp.iij.or.jp"
              className="text-sm text-foreground/80 underline-offset-4 hover:text-primary hover:underline transition-colors"
              aria-label="メールでのお問い合わせ"
            >
              sunaldy2@bp.iij.or.jp
            </Link>
          </div>
        </div>

        {/* 著作権 */}
        <div className="mt-16 sm:mt-24 pt-6 border-t border-border">
          <p className="text-center text-[11px] tracking-[0.2em] uppercase text-foreground/50">
            © {currentYear} Sunlady. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
