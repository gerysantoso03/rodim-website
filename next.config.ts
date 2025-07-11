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
    domains: ['www.basfrodim.id'],
  },
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/gallery-admin',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/product',
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
