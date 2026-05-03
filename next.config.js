/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'picsum.photos'],
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/menu',
        destination: '/qr-menu',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
