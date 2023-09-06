/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ['images.prismic.io', 'res.cloudinary.com'],
  },
  reactStrictMode: true,
  experimental: {
    swcPlugins: [['next-superjson-plugin', {}]],
  },
};
