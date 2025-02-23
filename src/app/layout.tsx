import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sunlady.co.jp'),
  title: {
    default: 'Sunlady Home',
    template: '%s | Sunlady Home'
  },
  description: 'ファッションショーおよびイベント企画制作運営、アパレル企画およびODM業務、企業プロモーション・PRおよびキャスティング業務を行うSunladyの公式サイトです。',
  keywords: ['ファッションショー', 'イベント企画', 'アパレル企画', 'ODM', 'キャスティング', 'プロモーション'],
  authors: [{ name: 'Sunlady' }],
  creator: 'Sunlady',
  publisher: 'Sunlady',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
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
    url: 'https://sunlady.co.jp',
    siteName: 'Sunlady Home',
    title: 'Sunlady Home',
    description: 'ファッションショーおよびイベント企画制作運営、アパレル企画およびODM業務、企業プロモーション・PRおよびキャスティング業務を行うSunladyの公式サイトです。',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sunlady Home',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunlady Home',
    description: 'ファッションショーおよびイベント企画制作運営、アパレル企画およびODM業務、企業プロモーション・PRおよびキャスティング業務を行うSunladyの公式サイトです。',
    images: ['/og-image.jpg'],
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
