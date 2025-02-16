import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

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
                <h2 className="text-lg font-semibold mb-4">Sunlady</h2>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-4">リンク</h2>
                <ul className="space-y-3">
                  <li>
                    <a href="/news" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      ニュース
                    </a>
                  </li>
                  <li>
                    <a href="/partners" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      パートナー企業
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      会社概要
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-4">お問い合わせ</h2>
                <ul className="space-y-3">
                  <li className="text-gray-600 dark:text-gray-300">
                    <span className="block">〒150-0021</span>
                    <span className="block">東京都渋谷区恵比寿西1-32-11</span>
                    <span className="block">ヴァイスハイム 3F</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
              <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
                © {new Date().getFullYear()} Sunlady. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
