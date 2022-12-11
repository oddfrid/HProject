/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{
    appDir: true,     
    outputStandalone: true,
  },
}

module.exports = nextConfig
