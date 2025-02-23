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
      enabled: true
    }
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
  // サーバーの設定
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  // セキュリティヘッダーの設定
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig; 