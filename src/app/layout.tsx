import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import Image from "next/image";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "Sunlady Home",
  description: "Sunlady official website",
  icons: {
    icon: {
      url: '/favicon.svg',
      type: 'image/svg+xml',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
          メインコンテンツにスキップ
        </a>
        <Navigation />
        <main id="main-content" className="flex-grow w-full mt-20">
          {children}
        </main>
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto" role="contentinfo">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h2 className="text-base font-semibold mb-4 text-gray-900 dark:text-white">会社情報</h2>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <p>株式会社FDサンレディ</p>
                  <p>〒150-0021</p>
                  <p>東京都渋谷区恵比寿西1-32-11</p>
                  <p>ヴァイスハイム 3F</p>
                </div>
              </div>
              <div>
                <h2 className="text-base font-semibold mb-4 text-gray-900 dark:text-white">アクセス</h2>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <p>JR恵比寿駅西口より徒歩5分</p>
                  <p>東京メトロ日比谷線恵比寿駅より徒歩7分</p>
                </div>
              </div>
              <div>
                <h2 className="text-base font-semibold mb-4 text-gray-900 dark:text-white">お問い合わせ</h2>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <p>お気軽にお問い合わせください</p>
                  <a href="mailto:sunlady2@bp.iij4u.or.jp" className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    sunlady2@bp.iij4u.or.jp
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Sunlady. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
