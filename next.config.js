/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // 開発時の型チェックを無効化
    ignoreBuildErrors: true,
  },
  eslint: {
    // 開発時のESLintチェックを無効化
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    // Server Actionsの設定
    serverActions: {
      allowedOrigins: ['localhost:3000'],
      bodySizeLimit: '2mb'
    },
  },
  // 静的エクスポートを無効化
  output: 'standalone',
  // ページ遷移の最適化
  reactStrictMode: true,
  poweredByHeader: false,
  // キャッシュの設定
  onDemandEntries: {
    // ページをメモリに保持する時間
    maxInactiveAge: 25 * 1000,
    // メモリに保持するページの最大数
    pagesBufferLength: 2,
  },
};

module.exports = nextConfig; 