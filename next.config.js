/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      // クーポンURLでアクセスがあった場合はAPI Routesの処理に飛ばすように設定しています
      {
        source: "/coupon/:userId",
        destination: "/api/coupon/:userId",
      },
    ];
  },
};

module.exports = nextConfig;
