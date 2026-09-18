import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable compression for better performance
  compress: true,
  
  // Generate static sitemap
  trailingSlash: false,
  
  // Next 14 did not run ESLint during `next build` (eslint was not a dependency).
  // Next 15.5 ships a bundled linter that runs by default, and the existing
  // codebase has pre-existing lint errors. Keep build behaviour identical to
  // before the upgrade; lint can be re-enabled separately once those are fixed.
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Optimize images
  images: {
    // Defense-in-depth for GHSA-2xp9-vwfh-vxw4 (Image Optimization / AVIF RCE).
    // The `next` upgrade to 15.5.24 is the actual fix; this disables the
    // /_next/image optimizer entirely, which costs nothing here because the app
    // never imports `next/image` (every image is a plain <img>). Drop this line
    // if next/image is ever adopted.
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Split chunks for better caching
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },
      };
    }
    
    return config;
  },
  
  // Security headers for better SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
};

export default withBundleAnalyzer(nextConfig);
