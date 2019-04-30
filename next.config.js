const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

// Next.js uses the env key to send variables through to the
// client side application. Use the keys directly from the .env
// file, or use them to send environment specific data.
require('dotenv').config()

const production = (process.env.NODE_ENV === "production");

// Google Analytics Example:
let googleAnalyticsKey = '';
if (production) googleAnalyticsKey = process.env.ga;

module.exports = withBundleAnalyzer({
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  },
  env: {
    googleAnalyticsKey: googleAnalyticsKey,
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  },
});


