/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ビルド時の型チェックを無効化（一時的な対応）
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
      },
    ],
  },
};

module.exports = nextConfig; 