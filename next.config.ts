import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'v1.pinimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'nexus.backend.zegiha.work',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**', // 모든 호스트 허용
      },
    ]
  },
  
  // CORS 우회를 위한 프록시 설정
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://52.231.201.28:4000/:path*',
      },
    ];
  },
};

export default nextConfig;
