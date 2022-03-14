/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "tailwindui.com", "cdn.buttercms.com"],
  },
};

module.exports = nextConfig;
