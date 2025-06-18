import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/api/manual-invoices',
        destination: 'https://couriersync-billing-payments-api.onrender.com/manual-invoices',
      },
      {
        source: '/api/manual-payments',
        destination: 'https://couriersync-billing-payments-api.onrender.com/manual-payments',
      },
    ];
  },
};

export default nextConfig;
