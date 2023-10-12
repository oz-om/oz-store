/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "telegra.ph",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "the-gadgeteer.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.redmondpie.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sc02.alicdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.giga.de",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
