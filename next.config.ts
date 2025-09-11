import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  output: 'standalone',
  images: {
    domains: ['basfrodim.id', 'www.basfrodim.id'],
  },
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: 'https://basfrodim.id/uploads/:path*', // hapus www
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
