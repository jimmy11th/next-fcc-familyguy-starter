/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  customAppFile: 'app.js',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
}

module.exports = nextConfig
