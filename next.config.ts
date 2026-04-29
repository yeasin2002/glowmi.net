import bundleAnalyzer from '@next/bundle-analyzer'
import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()
const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })

const nextConfig: NextConfig = {
  // standalone output for Docker (required for containerized deployments)
  // output: 'standalone',
  // typedRoutes: true,

  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },

  images: {
    remotePatterns: [
      { hostname: 'images.unsplash.com' },
      { hostname: 'consequence-string-quarterly-deny.trycloudflare.com' },
    ],
    qualities: [25, 50, 75, 90, 100],
  },
}

export default withBundleAnalyzer(withNextIntl(nextConfig))
