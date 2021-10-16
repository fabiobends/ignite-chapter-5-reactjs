const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({ reactStrictMode: true });

// then run in your terminal
// ANALYZE=true yarn build