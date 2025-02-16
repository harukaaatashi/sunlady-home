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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="col-span-1 sm:col-span-2">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Image
                    src="/sunlady-partner-logo.svg"
                    alt="Sunlady"
                    width={160}
                    height={40}
                    className="h-8 w-auto"
                  />
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  ファッションディレクトサンレディは、お客様のニーズに合わせた最適なソリューションを提供し、
                  ファッション業界の発展に貢献します。
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">リンク</h2>
                <ul className="space-y-3">
                  <li>
                    <a href="/news" className="group flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <span className="inline-block w-1 h-1 bg-gray-400 group-hover:bg-blue-400 rounded-full mr-2 transition-colors"></span>
                      ニュース
                    </a>
                  </li>
                  <li>
                    <a href="/partners" className="group flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <span className="inline-block w-1 h-1 bg-gray-400 group-hover:bg-blue-400 rounded-full mr-2 transition-colors"></span>
                      パートナー企業
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="group flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <span className="inline-block w-1 h-1 bg-gray-400 group-hover:bg-blue-400 rounded-full mr-2 transition-colors"></span>
                      会社概要
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">お問い合わせ</h2>
                <address className="not-italic">
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
                      </svg>
                      <div>
                        <span className="block">株式会社ファッションディレクトサンレディ</span>
                        <span className="block">〒150-0021</span>
                        <span className="block">東京都渋谷区恵比寿西1-32-11</span>
                        <span className="block">ヴァイスハイム 3F</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <a href="mailto:sunlady2@bp.iij4u.or.jp" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        sunlady2@bp.iij4u.or.jp
                      </a>
                    </li>
                  </ul>
                </address>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
                  © {new Date().getFullYear()} Sunlady. All rights reserved.
                </p>
                <div className="flex items-center space-x-4">
                  <a href="/privacy-policy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                    プライバシーポリシー
                  </a>
                  <span className="text-gray-300 dark:text-gray-700">|</span>
                  <a href="/terms" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                    利用規約
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
