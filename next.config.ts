import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    basePath: process.env.NEXT_PUBLIC_NODE_ENV === 'production' ? "/portfolio" : '',
  },
};

export default nextConfig;
