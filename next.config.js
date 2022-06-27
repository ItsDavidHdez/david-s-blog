/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["static.ghost.org", "localhost"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
