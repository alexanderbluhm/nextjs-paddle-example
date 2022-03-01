/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["paddle.s3.amazonaws.com", "static.paddle.com"],
  },
};

module.exports = nextConfig;
