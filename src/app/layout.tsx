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
    <html lang="ja" className={notoSansJP.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
          メインコンテンツにスキップ
        </a>
        <Navigation />
        <main id="main-content" className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
          {children}
        </main>
        <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-auto" role="contentinfo">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-600 dark:text-gray-400">© 2024 Sunlady. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
