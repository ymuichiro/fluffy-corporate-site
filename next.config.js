const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [],
  publicExcludes: ["!**/*"],
  buildExcludes: [() => true],
  fallbacks: false,
  cacheStartUrl: false,
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  images: {
    domains: ["https://www.google.com/maps/"],
  },
  trailingSlash: true,
  reactStrictMode: true,
});

module.exports = nextConfig;
