import { Container } from '@/components/ui/container';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background border-t" role="contentinfo">
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">会社情報</h2>
            <address className="not-italic space-y-2 text-sm text-muted-foreground">
              <p>株式会社 ファッション ディレクト サンレディ</p>
              <p>〒150-0021</p>
              <p>東京都渋谷区恵比寿西1-32-11</p>
              <p>ヴァイスハイム 3F</p>
            </address>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">アクセス</h2>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>東急東横線 代官山駅 徒歩約3分</p>
                  <p>JR山手線 恵比寿駅 徒歩約4分</p>
                  <p>東京メトロ日比谷線 恵比寿駅 徒歩約4分</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">お問い合わせ</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <Link 
                  href="mailto:sunaldy2@bp.iij.or.jp"
                  className="hover:text-primary transition-colors"
                  aria-label="メールでのお問い合わせ"
                >
                  sunaldy2@bp.iij.or.jp
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sunlady. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
} 