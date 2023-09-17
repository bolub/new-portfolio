/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ["images.prismic.io", "res.cloudinary.com", "www.boluabiola.com"],
  },
  reactStrictMode: true,
  experimental: {
    swcPlugins: [["next-superjson-plugin", {}]],
  },
};
