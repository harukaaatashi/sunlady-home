import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from '@/components/Footer';
import { SkipLink } from '@/components/SkipLink';

const inter = Inter({
  subsets: ["latin"],
  display: "optional", // ブロッキングを防ぐ
  fallback: ['system-ui', 'arial'],
  variable: '--font-inter'
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ['300', '400', '500'],
  display: "swap",
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'sans-serif'],
  variable: '--font-noto-sans-jp'
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL('https://sunlady.tokyo'),
  title: {
    default: '株式会社ファッション ディレクト サンレディ',
    template: '%s | 株式会社ファッション ディレクト サンレディ'
  },
  description: 'ファッションショーおよびイベント企画制作運営、アパレル企画およびODM業務、企業プロモーション・PRおよびキャスティング業務を行うSunladyの公式サイトです。',
  keywords: ['ファッションショー', 'イベント企画', 'アパレル企画', 'ODM', 'キャスティング', 'プロモーション'],
  authors: [{ name: '株式会社ファッション ディレクト サンレディ' }],
  creator: '株式会社ファッション ディレクト サンレディ',
  publisher: '株式会社ファッション ディレクト サンレディ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://sunlady.tokyo',
    siteName: '株式会社ファッション ディレクト サンレディ',
    title: '株式会社ファッション ディレクト サンレディ',
    description: 'ファッションショーおよびイベント企画制作運営、アパレル企画およびODM業務、企業プロモーション・PRおよびキャスティング業務を行うSunladyの公式サイトです。',
    // images は指定しない: src/app/opengraph-image.tsx が生成した画像が自動で使われる
    // （存在しない /og-image.jpg を指していたため、共有時にサムネイルが出ていなかった）
  },
  twitter: {
    card: 'summary_large_image',
    title: '株式会社ファッション ディレクト サンレディ',
    description: 'ファッションショーおよびイベント企画制作運営、アパレル企画およびODM業務、企業プロモーション・PRおよびキャスティング業務を行うSunladyの公式サイトです。',
    // images は指定しない: 同上（opengraph-image.tsx が twitter:image にも使われる）
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.microcms-assets.io" />
      </head>
      <body className={`${inter.variable} ${notoSansJP.variable} min-h-screen flex flex-col font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SkipLink />
          <Navigation />
          <main id="main-content" className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
