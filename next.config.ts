import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  productionBrowserSourceMaps: true,
  experimental: {
    viewTransition: true,
    reactCompiler: true,
    optimizeCss: true,
    optimizeServerReact: true,
    optimisticClientCache: true,
    // ppr: "incremental",
    scrollRestoration: true,
  },
}

export default nextConfig
