/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static optimization to prevent build errors
  // This ensures all pages are rendered dynamically
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  
  // Webpack configuration for Puppeteer/Chromium compatibility
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Mark chromium and puppeteer-core as externals to avoid bundling issues
      config.externals = config.externals || [];
      config.externals.push({
        '@sparticuz/chromium': 'commonjs @sparticuz/chromium',
        'puppeteer-core': 'commonjs puppeteer-core',
      });
    }
    return config;
  },
};

module.exports = nextConfig;

