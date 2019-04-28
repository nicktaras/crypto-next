// Next.js uses the env key to send variables through to the
// client side application. Use the keys directly from the .env
// file, or use them to send environment specific data.
require('dotenv').config()

const production = (process.env.NODE_ENV === "production");

// Google Analytics Example:
let googleAnalyticsKey = '';
if (production) googleAnalyticsKey = process.env.ga;

module.exports = {
  env: {
    googleAnalyticsKey: googleAnalyticsKey,
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  },
  target: 'serverless'
}