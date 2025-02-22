import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-background/50 to-background"
    >
      <Navigation />
      <main className="mt-20">
        <Container>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {children}
          </motion.div>
        </Container>
      </main>
      <footer className="border-t mt-12 sm:mt-16">
        <Container className="py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">会社情報</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>株式会社FDサンレディ</p>
                <p>〒150-0021</p>
                <p>東京都渋谷区恵比寿西1-32-11</p>
                <p>ヴァイスハイム 3F</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">アクセス</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>JR恵比寿駅西口より徒歩5分</p>
                <p>東京メトロ日比谷線恵比寿駅より徒歩7分</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">お問い合わせ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>お気軽にお問い合わせください</p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center hover:text-primary transition-colors"
                >
                  お問い合わせフォーム
                  <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="border-t mt-8 pt-8">
            <p className="text-center text-sm text-muted-foreground">© 2024 Sunlady. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </motion.div>
  );
} 