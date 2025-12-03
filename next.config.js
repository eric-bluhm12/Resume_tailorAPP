/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure proper handling of API routes with larger payloads
  api: {
    bodyParser: {
      sizeLimit: '2mb',
    },
    responseLimit: '8mb',
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

